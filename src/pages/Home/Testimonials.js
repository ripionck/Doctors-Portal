import React from "react";
import photo1 from "../../assets/images/people1.png";
import photo2 from "../../assets/images/people2.png";
import photo3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const comments = [
    {
      _id: 1,
      img: photo1,
      name: "Winson Hery",
      state: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
    },
    {
      _id: 2,
      img: photo2,
      name: "Winson Hery",
      state: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
    },
    {
      _id: 3,
      img: photo3,
      name: "Winson Hery",
      state: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
    },
  ];
  return (
    <div className="my-14">
      <div className="flex justify-between">
        <div>
          <h3 className="text-primary">Testimonial</h3>
          <h3 className="text-3xl">What Our Patients Says</h3>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-14 ml-6">
        {comments.map((comment) => (
          <Testimonial key={comment._id} comment={comment}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
