"use client";
import { useState } from "react";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import AdditionalInformationForm from "./AdditionalInformationForm";
import Profile from "@/icons/profile";
import Address from "@/icons/Address";
import Pin from "@/icons/Pin";
import EmailType from "@/icons/EmailType";
import Map from "./Map";

// Immediate Response Form Component
const ImmediateResponseForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [pinDropNumber, setPinDropNumber] = useState("");
  const [address, setAddress] = useState("");
  const [emergencyType, setEmergencyType] = useState("");

  const cityArray = ["Medical", "Fire", "Crime", "Other"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pinDropNumber && !address) {
      alert("Please provide either a Pin Drop Number or an Address.");
      return;
    }
    const identifierData = { firstName, pinDropNumber, address, emergencyType };
    onSubmit(identifierData);
  };

  const center = {
    lat: 32.33557301648227,
    lng: 74.36152118336334,
  };

  return (
    <>
      <div className="overflow-hidden">
        <Map center={center} height={"56vh"} />
        <form
          className="max-w-[95%] mx-auto mt-8 basis-full  h-full p-5 bg-white rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <p className="text-[23px] font-bold pb-5">Add Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              size="sm"
              placeholder="Name"
              classNames={{ inputWrapper: "!bg-white" }}
              type="text"
              className="w-full border p-2 border-gray-300  rounded-md "
              value={firstName}
              required
              startContent={<Profile />}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <Input
              size="sm"
              placeholder="Address"
              classNames={{ inputWrapper: "!bg-white" }}
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md "
              startContent={<Address />}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <Input
              size="sm"
              placeholder="Pin Drop Number"
              classNames={{ inputWrapper: "!bg-white" }}
              type="number"
              className="w-full border p-2 border-gray-300  rounded-md "
              startContent={<Pin />}
              value={pinDropNumber}
              onChange={(e) => setPinDropNumber(e.target.value)}
            />

            <Select
              size="sm"
              placeholder="Emergency Type*"
              classNames={{
                mainWrapper:
                  "!bg-white border-2 border-gray-300 p-2 rounded-md",
                trigger: "!bg-white",
              }}
              startContent={<EmailType />}
              value={emergencyType}
              onChange={(e) => setEmergencyType(e.target.value)}
            >
              {cityArray.map((type, index) => (
                <SelectItem key={index} value={type}>
                  {type}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="text-end">
            <Button
              className="mt-5 text-sm bg-[#2D8076] text-white"
              size="sm"
              type="submit"
            >
              Immediate Response
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ImmediateResponseForm;
