import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import appointment from "../../assets/images/appointment.png";

const ContactForm = () => {
  return (
    <div
      style={{ background: `url(${appointment})` }}
      className="bg-primary px-10 py-14"
    >
      <div className="my-12">
        <div className="text-center pb-14 text-white">
          <p className="text-xl font-bold text-primary">Contact Us</p>
          <h3 className="text-4xl">Stay Contact With Us</h3>
        </div>
        <div className="grid grid-cols-1 justify-items-center">
          <input
            type="text"
            placeholder="Email Address"
            className="input w-full max-w-md"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-md"
          />
          <br />
          <textarea
            className="textarea w-full max-w-md mb-8"
            placeholder="Your Message"
            rows={6}
          ></textarea>
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
