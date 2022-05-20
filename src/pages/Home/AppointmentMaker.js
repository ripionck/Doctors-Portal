import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";

const AppointmentMaker = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className="flex justify-center items-center">
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-100px]" src={doctor} alt="" />
        </div>
        <div className="flex-1 px-5">
          <h3 className="text-primary text-xl font-bold">Appointment</h3>
          <h3 className="text-3xl text-white mt-2">
            Make an Appointment Today
          </h3>
          <p className="text-white mt-4 mb-6 pr-12">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default AppointmentMaker;
