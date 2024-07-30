'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaSearch, FaFilter, FaTable } from "react-icons/fa";
import { Input } from '@nextui-org/react';
import Map from './Map';
import Popup from './popup'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const Navigation = () => {
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState(null);

    const handlePageClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    useEffect(() => {
        document.addEventListener('click', handlePageClick);
        return () => {
            document.removeEventListener('click', handlePageClick);
        };
    }, []);





    const mapContainerStyle = {
        width: '100%',
        height: '80vh'
    };

    const center = {
        lat: 18.1096,
        lng: -77.2975
    };


    const emergencyPersonnel = [
        { id: 1, lat: 18.1096, lng: -77.2975, name: "Officer A", type: "Police", status: "Active", contact: "123-456-7890" },
        { id: 2, lat: 18.2096, lng: -77.2975, name: "Ambulance B", type: "Ambulance", status: "Active", contact: "123-456-7891" },
        { id: 3, lat: 20.2096, lng: -70.2975, name: "Fire", type: "Ambulance", status: "Active", contact: "123-456-7891" },
        // Add more personnel as needed
      ];



    return (
        <>

            <div>
                {/* <Popup isOpen={showModal} onClose={handleCloseModal} /> */}
                <div className="flex items-center justify-end space-x-2 p-5">
                    {/* <Input
                        isClearable
                        radius="lg"
                        className="w-auto"
                        placeholder="Search for personal by name id"
                        startContent={
                            <CiSearch className="text-[#2D8076] mb-0.5 pointer-events-none flex-shrink-0" />
                        }
                    /> */}
                    {/* <button className="p-2 bg-gray-100 rounded-md">
                        <FaFilter />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-md">
                        <FaTable />
                    </button> */}
                </div>
                {/* <Map center={center} height={"80vh"} /> */}

                <LoadScript googleMapsApiKey="AIzaSyDCQ_UrxKRUnMpP_f7mnT0BxZcjcSnp7EY">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={10}
                    >
                        {emergencyPersonnel.map(person => (
                            <Marker
                                key={person.id}
                                position={{ lat: person.lat, lng: person.lng }}
                                onClick={() => setSelected(person)}
                            />
                        ))}
                        {selected ? (
                            <InfoWindow
                                position={{ lat: selected.lat, lng: selected.lng }}
                                onCloseClick={() => setSelected(null)}
                            >
                                <div>
                                    <h2>{selected.name}</h2>
                                    <p>Type: {selected.type}</p>
                                    <p>Status: {selected.status}</p>
                                    <p>Contact: {selected.contact}</p>
                                </div>
                            </InfoWindow>
                        ) : null}
                    </GoogleMap>
                </LoadScript>
            </div>


        </>
    )
}

export default Navigation