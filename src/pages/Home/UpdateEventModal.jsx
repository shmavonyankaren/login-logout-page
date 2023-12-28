import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import { deletEvent, updateEvent } from "../../redux/events/eventsSlice";
import { useDispatch } from "react-redux";
import InputComponents from "../../components/InputComponents";

export default function UpdateEventModal({ currentValue, currentImage, id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [event, setEvent] = useState(currentValue);
  const [image, setImage] = useState(currentImage);
  const dispatch = useDispatch();
  const updateFunc = (e) => {
    e.preventDefault();
    dispatch(
      updateEvent({
        id,
        value: event,
        image: image,
      })
    );
    handleClose();
  };
  const deleteFunc = () => {
    dispatch(deletEvent(id));
  };

  return (
    <div>
      <div className="mb-0 flex">
        <ButtonComponent
          text="Update"
          type="button"
          onClickHandler={handleShow}
        />
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
          <form onSubmit={updateFunc} id="form">
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
          <ButtonComponent text="Update Event" type="submit" form="form" />
          <ButtonComponent
            text="Delete Event"
            type="button"
            onClickHandler={deleteFunc}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
}
