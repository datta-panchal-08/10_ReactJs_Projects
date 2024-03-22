import React, { useState } from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";


const ContactForm = () => {
   const [name,setName] = useState(null);
   const [email,setEmail] = useState(null);
   const [message,setMessage] = useState(null);
    const SubmitHandler = (event) =>{
        event.preventDefault();
        let name = event.target[0].value;
        let email  = event.target[1].value;
        let message = event.target[2].value;

        setName(name);
        setEmail(email);
        setMessage(message);
    }
   
  return (
    <div className="w-full h-[calc(100vh - 72px)] flex gap-5  px-[15vw] mt-4">
      <div className=" w-[40vw] h-[59.1vh] flex flex-col">
        <div className="flex gap-8">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage className="text-[24px]" />}
          />
          <Button 
            text="VIA SUPPORT CALL"
            icon={<FaPhoneAlt className="text-[20px] " />}
          />
        </div>
        <div>
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<MdMail className="text-[24px] " />}
          />
          <form  onSubmit={SubmitHandler} className="flex mt-4 flex-col w-[35vw] px-7" action="">
           <div className="relative mb-4">
            <label className=" absolute top-[-.8vw] px-2 left-2 bg-white text-[16px]" htmlFor="name">Name</label>
           <input
              className="py-2 px-2 w-[33.3vw] border-solid border-zinc-600 border-[.1vw] outline-blue-400 rounded "
              type="text"
              />
           </div>
           <div className="relative mb-4">
            <label className="absolute top-[-.8vw] px-2 left-2 bg-white text-[16px]" htmlFor="Email">E-Mail</label>
           <input
              className="py-2  px-3 w-[33.3vw] border-solid border-zinc-600 border-[.1vw] outline-blue-400 rounded "
              type="text"
              />
           </div>
           <div className="relative  ">
            <label className="absolute top-[-.8vw] px-2 left-2 bg-white text-[16px]" htmlFor="Email">TEXT</label>
           <textarea
              className="py-2 resize-none px-3 w-[33.3vw] border-solid border-zinc-600 border-[.1vw] outline-blue-400 rounded "
              type="text"
              />
           </div>
            <div className="flex w-[33.3vw] items-center mt-1 mb-2 justify-end ">
              <button
                className="bg-black text-white w-52 rounded h-10 "
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className="flex flex-col flex-wrap gap-4">
                <h4>Name : {name}</h4>
                <h4>Email : {email}</h4>
                <h4>Message : {message}</h4>
              </div>
          </form>
        </div>
      </div>

      <div className="w-[40vw] h-[59.1vh]">
        <img className="w-full h-full object-cover object-bottom" src="./images/contact.svg" alt="" />
     </div> 
    </div>
  );
};

export default ContactForm;
