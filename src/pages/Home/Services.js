import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import Service from "./Service";
import PrimaryButton from "../Shared/PrimaryButton";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      img: whitening,
    },
  ];

  return (
    <div className="my-24">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our SErvices
        </h3>
        <h3 className="text-3xl">Service We Provide</h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div class="hero min-h-screen px-16">
        <div class="hero-content flex-col lg:flex-row">
          <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
          <div className="ml-10">
            <h1 class="text-4xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>get started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
