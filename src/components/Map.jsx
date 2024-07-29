"use client";
import { Spinner } from "@nextui-org/react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useCallback, useState, useEffect } from "react";

const Map = ({ center, height }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDCQ_UrxKRUnMpP_f7mnT0BxZcjcSnp7EY",
  });
  const [map, setMap] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const containerStyle = {
    width: "100%",
    height: height,
  };

  useEffect(() => {
    if (isLoaded && map) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              // lat: position.coords.latitude,
              // lng: position.coords.longitude,
              lat : 34.6992,
              lng : 72.2630
            };

            // Center the map on the user's location
            map.setCenter(pos);

            // Add a marker at the user's location
            new window.google.maps.Marker({
              position: pos,
              map: map,
              title: "You are here",
              onClick: () => setSelectedPosition(pos),
            });
          },
          () => {
            handleLocationError(true, map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map.getCenter());
      }
    }
  }, [isLoaded, map]);

  function handleLocationError(browserHasGeolocation, pos) {
    const infoWindow = new window.google.maps.InfoWindow({
      position: pos,
    });

    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {selectedPosition && (
        <InfoWindow
          position={selectedPosition}
          onCloseClick={() => setSelectedPosition(null)}
        >
          <div>
            <h2>You are here</h2>
            <p>This is your current location</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <div className="flex items-center justify-center h-[30vh]">
      <Spinner color="default" label="Map Loading" />
    </div>
  );
};

export default Map;
