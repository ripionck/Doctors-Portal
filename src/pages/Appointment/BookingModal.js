import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { name, slots } = treatment;
  const [user] = useAuthState(auth);

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    //const name = e.target.name.value;
    // const email = e.target.email.value;
    // const phone = e.target.phone.value;
    console.log(slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
      ;
    </div>
  );
};

export default BookingModal;
