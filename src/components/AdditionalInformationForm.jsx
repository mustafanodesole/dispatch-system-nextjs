"use client";
import { useState, useEffect } from "react";
import { Button, Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import { CgProfile } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import Profile from "@/icons/profile";
import Age from "@/icons/Age";
import Address from "@/icons/Address";
import Pin from "@/icons/Pin";
import EmailType from "@/icons/EmailType";
import Note from "@/icons/Note";
import Map from "./Map";
import { CiSearch } from "react-icons/ci";
import { FaSearch, FaFilter, FaTable } from "react-icons/fa";
import Popup from './popup'

const AdditionalInformationForm = ({ onSubmit, onClose }) => {
  const [age, setAge] = useState("");
  const [address2, asfdsadfsadfsadfsdfsd] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [witness, setWitness] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [detailInstructions, setDetailInstructions] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (
    //   !age ||
    //   !address2 ||
    //   !description ||
    //   !witness ||
    //   !specialInstructions ||
    //   !detailInstructions
    // ) {
    //   alert("Please fill all the required fields.");
    //   return;
    // }
    const additionalData = {
      age,
      address2,
      phoneNumber,
      description,
      witness,
      specialInstructions,
      detailInstructions,
    };
    onSubmit(additionalData);
    setShowMap(true);
  };
  const center = {
    lat: 32.33557301648227,
    lng: 74.36152118336334,
  };

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



  return (
    <>
      {showMap ? (
        <div>
          <Popup  isOpen={showModal} onClose={handleCloseModal}/>
          <div className="flex items-center justify-end space-x-2 p-5">
                    <Input
                        isClearable
                        radius="lg"
                        className="w-auto"
                        placeholder="Search for personal by name id"
                        startContent={
                            <CiSearch className="text-[#2D8076] mb-0.5 pointer-events-none flex-shrink-0" />
                        }
                    />
                    {/* <button className="p-2 bg-gray-100 rounded-md">
                        <FaFilter />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-md">
                        <FaTable />
                    </button> */}
                </div>
          <Map center={center} height={"80vh"} />
        </div>
      ) : (
        <div>
          <Map center={center} height={"35vh"} />
          <form
            className="max-w-[96%] mt-10 w-full mx-auto p-4 bg-white shadow-md rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2 sm:flex-row items-baseline mb-2">
              <p className="text-[23px] font-bold ">Add Information</p>
              {/* <p className="text-1xl font-bold">(Caller Information)</p> */}
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  size="sm"
                  placeholder="Caller's Name"
                  classNames={{ inputWrapper: "!bg-white" }}
                  type="text"
                  className="w-full border p-2 border-gray-300  rounded "
                  // startContent={<CgProfile className='mr-1 text-[#2D8076]'/>}
                  // labelPlacement="outside"
                  startContent={<Profile />}
                />

                <Input
                  // label="Phone Number"
                  placeholder="Phone Number"
                  size="sm"
                  classNames={{ inputWrapper: "!bg-white" }}
                  type="number"
                  className="w-full border p-2 border-gray-300 text-gray-500  rounded "
                  startContent={<FaPhoneAlt className="mr-1 text-[#2D8076]" />}
                />
                <Input
                  placeholder="Age"
                  size="sm"
                  classNames={{ inputWrapper: "!bg-white" }}
                  type="number"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  startContent={<Age />}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="Address"
                  type="text"
                  size="sm"
                  classNames={{ inputWrapper: "!bg-white" }}
                  className="w-full p-2 border border-gray-300  rounded-md"
                  startContent={<Address />}
                />

                <Input
                  placeholder="Pin Drop Number"
                  type="number"
                  size="sm"
                  classNames={{ inputWrapper: "!bg-white" }}
                  className="w-full border border-gray-300 p-2  rounded-md"
                  startContent={<Pin />}
                />

                <Select
                  startContent={<EmailType />}
                  size="sm"
                  className="w-full border p-2 border-gray-300  rounded-md"
                  classNames={{ inputWrapper: "!bg-white" }}
                  placeholder="Emergency Type"
                >
                  <SelectItem>Medical</SelectItem>
                  <SelectItem>Fire</SelectItem>
                  <SelectItem>Crime</SelectItem>
                  <SelectItem>Other</SelectItem>
                </Select>
              </div>

              <div className="space-y-4">
                <Textarea
                  placeholder="Caller Description"
                  size="sm"
                  classNames={{ inputWrapper: "!bg-white" }}
                  className="w-full border border-gray-300 p-2 rounded"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  startContent={<Note />}
                />

                <Textarea
                  placeholder="Special Instructions"
                  size="sm"
                  classNames={{ inputWrapper: "!bg-white" }}
                  className="w-full  border border-gray-300 p-2 rounded"
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  startContent={<Note />}
                />
              </div>
            </div>
            <div className="mt-4  flex max-sm:flex-col sm:flex-row gap-2 justify-end">
              <Button color="danger" variant="flat" onPress={onClose} size="sm">
                Close
              </Button>
              <Button
                onClick={() => setShowMap(true)}
                type="submit"
                className="bg-[#2D8076] text-white"
                size="sm"
                fullWidth={false}
              >
                Response Imediate
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AdditionalInformationForm;
