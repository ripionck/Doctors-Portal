import React from "react";
import AppointmentMaker from "./AppointmentMaker";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Footer from "../Shared/Footer";
import Info from "./Info";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <AppointmentMaker></AppointmentMaker>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
