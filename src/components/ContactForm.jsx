import React from "react";
import Button from "./Button";

function ContactForm() {
  return (
    <form className="bg-primary shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label
        htmlFor="phone-number"
        className="font-poppins font-normal text-cyan-50 text-[20px] mr-5"
      >
        Phone Number :
      </label>
      <input
        type="tel"
        id="phone-number"
        placeholder="Enter Parent's Contact Number"
        className="shadow appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <Button styles={`rounded-[25px] m-5`} text="Book Free Trial"/>
      
    </form>
  );
}

export default ContactForm;
