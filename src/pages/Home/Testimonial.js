import React from "react";

const Testimonial = ({ comment }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{comment.description}</p>
        <div className="flex items-center">
          <div className="avatar my-6">
            <div className="w-18 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={comment.img} alt="" />
            </div>
          </div>
          <div className="pl-4">
            <h3 className="text-xl">{comment.name}</h3>
            <h3>{comment.state}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
