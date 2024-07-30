'use client'
import React from 'react'
import { useEffect , useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaSearch, FaFilter, FaTable } from "react-icons/fa";
import { Input } from '@nextui-org/react';
import Map from './Map';
import Popup from './popup'

const Navigation = () => {
    const [showModal, setShowModal] = useState(false);

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



    const center = {
        lat: 32.33557301648227,
        lng: 74.36152118336334,
    };





    return (
        <>

            <div>
                <Popup isOpen={showModal} onClose={handleCloseModal} />
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
                <Map center={center} height={"80vh"} />
            </div>


        </>
    )
}

export default Navigation