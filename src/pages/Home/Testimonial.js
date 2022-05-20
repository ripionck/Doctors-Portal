import React from "react";

const Testimonial = ({ comment }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{comment.description}</p>
        <div className="flex items-center">
          <div class="avatar my-6">
            <div class="w-18 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={comment.img} />
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
