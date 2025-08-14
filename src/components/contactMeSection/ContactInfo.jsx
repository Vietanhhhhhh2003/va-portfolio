import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-black">
      <SingleInfo text="vietanh952003@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+84 0394799596" Image={FiPhone} />
      <SingleInfo text="Ha Noi, Viet Nam" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
