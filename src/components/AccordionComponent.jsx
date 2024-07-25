'use client'
import React from "react";
import { Accordion, AccordionItem, Card, CardHeader, Divider, Image } from "@nextui-org/react";
import { IoCallOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { PiTelevisionLight } from "react-icons/pi";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function AccordionComponent({ row }) {
    return (
                <Card className="bg-transparent shadow-none">
                    <div className="grid grid-cols-5 gap-4 my-4 mx-7 items-center border-[#2D8076] border-l-2 ps-5">
                        <div className="flex flex-col">
                            <span className="text-[#727789] text-[10px] font-medium">Caller’s Name</span>
                            <p className="text-sm font-normal">{row.caller}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <IoCallOutline size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2" />
                            </div>
                            <div>
                                <span className="text-[#727789] text-[10px] font-medium">Phone Number</span>
                                <p className="text-sm font-normal">{row.phoneNumber}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <CiCalendarDate size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2" />
                            </div>
                            <div>
                                <span className="text-[#727789] text-[10px] font-medium">Age</span>
                                <p className="text-sm font-normal">{row.age}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <Image alt="nextui logo" height={40} radius="sm" src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" width={40} />
                            </div>
                            <div>
                                <span className="text-[#727789] text-[10px] font-medium">Dispatcher’s Name</span>
                                <p className="text-sm font-normal">{row.dispatcherName}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <Image alt="nextui logo" height={40} radius="sm" src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" width={40} />
                            </div>
                            <div>
                                <span className="text-[#727789] text-[10px] font-medium">Emergency personnel Involved</span>
                                <p className="text-sm font-normal">{row.emergencyPersonnel}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <BsClockHistory size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2" />
                            </div>
                            <div>
                                <span className="text-[#727789] text-[10px] font-medium">Time taken to respond</span>
                                <p className="text-sm font-normal">{row.responseTime}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <BsClockHistory size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2" />
                            </div>
                            <div>
                                <span className="text-[#727789] text-[10px] font-medium">Time taken to complete</span>
                                <p className="text-sm font-normal">{row.completionTime}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <BsClockHistory size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2" />
                            </div>
                            <div>
                                <span className="text-[#727789] text-[10px] font-medium">Call Start Time</span>
                                <p className="text-sm font-normal">{row.callStartTime}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <BsClockHistory size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2" />
                            </div>
                            <div>
                                <span className="text-[#727789] text-[10px] font-medium">Call End Time</span>
                                <p className="text-sm font-normal">{row.callEndTime}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <CiLocationOn size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2" />
                            </div>
                            <div>
                                <span className="text-[#727789] text-[10px] font-medium">Address</span>
                                <p className="text-sm font-normal">{row.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 col-span-2">
                            <div>
                                <PiTelevisionLight size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2" />
                            </div>
                            <div>
                                <span className="text-[#727789] text-[10px] font-medium">Outcome & Resolution</span>
                                <p className="text-sm font-normal">{row.outcome}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 col-span-2">
                            <div>
                                <MdOutlineStickyNote2 size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2" />
                            </div>
                            <div>
                                <span className="text-[#727789] text-[10px] font-medium">Dispatcher’s Notes</span>
                                <p className="text-sm font-normal">{row.notes}</p>
                            </div>
                        </div>
                        <div className="col-span-5">
                            <span className="text-[#727789] text-[10px] font-medium">Caller Description</span>
                            <p className="text-sm font-normal">{row.description}</p>
                        </div>
                    </div>
                </Card>
    );
}
