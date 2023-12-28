import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import { addEvent } from "../../redux/events/eventsSlice";
import { useDispatch } from "react-redux";
import InputComponents from "../../components/InputComponents";
import { MdAssignmentAdd } from "react-icons/md";

export default function AddEventModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [event, setEvent] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const addFunc = (e) => {
    e.preventDefault();
    dispatch(
      addEvent({
        id: Math.random(),
        value: event,
        image: image,
      })
    );
    setEvent("");
    setImage("");
    handleClose();
  };

  return (
    <div>
      <div className="mb-0 flex">
        <button onClick={handleShow}>
          <MdAssignmentAdd size="45px" />
        </button>
      </div>
      <Modal
        show={show}
        centered
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Information about product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={addFunc} id="form">
            <div>
              <InputComponents
                type="text"
                text="Event"
                placeholderText="Your event name"
                setValue={setEvent}
                value={event}
              />
            </div>
            <div>
              <InputComponents
                type="text"
                text="Image"
                placeholderText="Your image link"
                setValue={setImage}
                value={image}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <ButtonComponent form="form" text="Add Event" type="submit" />
        </Modal.Footer>
      </Modal>
    </div>
  );
}
