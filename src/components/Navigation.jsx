'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaSearch, FaFilter, FaTable } from "react-icons/fa";
import { Input, Button, select } from '@nextui-org/react';
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
                <Map center={center} height={"80vh"} />
                
               
            </div>


        </>
    )
}

export default Navigation