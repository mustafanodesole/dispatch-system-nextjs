'use client';
import { useState } from 'react';
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import AdditionalInformationForm from './AdditionalInformationForm'
// Immediate Response Form Component
const ImmediateResponseForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [pinDropNumber, setPinDropNumber] = useState('');
    const [address, setAddress] = useState('');
    const [emergencyType, setEmergencyType] = useState('');

    const cityArray = ['Medical', 'Fire', 'Crime', 'Other'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!pinDropNumber && !address) {
            alert('Please provide either a Pin Drop Number or an Address.');
            return;
        }
        const identifierData = { firstName, pinDropNumber, address, emergencyType };
        onSubmit(identifierData);
    };

    return (
        <form className="max-w-[80%] mx-auto p-4 bg-white" onSubmit={handleSubmit}>
            <p className="text-[23px] font-bold ">1B BILLING INFORMATION</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <Input
                    size='sm'
                    label='Name'
                    classNames={{ inputWrapper: '!bg-white' }}
                    type="text"
                    className="w-full border border-gray-300  rounded "
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                />


                <Input
                    size='sm'
                    label="Address"
                    classNames={{ inputWrapper: '!bg-white' }}
                    type="text"
                    className="w-full border border-gray-300  rounded "
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />


                <Input
                    size='sm'
                    label="Pin Drop Number"
                    classNames={{ inputWrapper: '!bg-white' }}
                    type="number"
                    className="w-full border border-gray-300  rounded "
                    value={pinDropNumber}
                    onChange={(e) => setPinDropNumber(e.target.value)}
                />


                <Select
                    size='sm'
                    label="Emergency Type*"
                    classNames={{ mainWrapper: '!bg-white border-2 border-gray-300', trigger: '!bg-white' }}
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
            <div className='text-end'>
            <Button className='mt-5' size='sm' type="submit" color="primary">
                Immediate Response
            </Button>
            </div>
        </form>
    );
};

export default ImmediateResponseForm