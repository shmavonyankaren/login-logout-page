import React from "react";
import { useDispatch } from "react-redux";
import { MdAutoDelete } from "react-icons/md";
import { deletEvent } from "../../redux/events/eventsSlice";
import UpdateEventModal from "./UpdateEventModal";

export default function Event({ event }) {
  const { image, value, id } = event;
  const dispatch = useDispatch();
  const deleteFunc = () => {
    dispatch(deletEvent(id));
  };

  return (
    <div className="m-2 mx-1 max-w-[380px] min-w-[380px] max-h-[250px] min-h-[250px] py-8 px-4  bg-white/90 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block bg-cover m-0 w-24 rounded- sm:mx-0 sm:shrink-0"
        src={image}
        alt={value}
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{value}</p>
        </div>
        <div className="flex">
          <div className="ml-9">
            <UpdateEventModal
              currentValue={value}
              currentImage={image}
              id={id}
            />
          </div>
          <div className="ml-4">
            <button onClick={deleteFunc}>
              <MdAutoDelete size="35px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
