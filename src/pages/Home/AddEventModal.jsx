import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ButtonComponent from "../../components/LoginButtonComponent";
import SearchInput from "../../components/SearchInput";
import { addEvent } from "../../redux/events/eventsSlice";
import { useDispatch } from "react-redux";
import InputComponents from "../../components/LoginInputComponents";

export default function AddEventModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [event, setEvent] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mb-0 flex">
        <ButtonComponent text="+" type="button" onClickHandler={handleShow} />
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
        </Modal.Body>
        <Modal.Footer>
          <ButtonComponent
            text="Add Event"
            type="button"
            onClickHandler={() => {
              dispatch(
                addEvent({
                  id: Math.random(),
                  value: event,
                  image: image,
                })
              );
              setEvent("");
              handleClose();
            }}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
}
