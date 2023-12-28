import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ButtonComponent from "../../components/LoginButtonComponent";
import SearchInput from "../../components/SearchInput";
import { addEvent } from "../../redux/events/eventsSlice";
import { useDispatch } from "react-redux";

export default function AddEventModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [event, setEvent] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mb-0 flex">
        <ButtonComponent text="+" type="button" onClickHandler={handleShow} />
      </div>
      <Modal
        show={show}
        centered
        size="lg"
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Information about product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SearchInput value={event} setValue={setEvent} />
          <ButtonComponent
            text="+"
            type="button"
            onClickHandler={() => {
              dispatch(
                addEvent({
                  id: Math.random(),
                  value: event,
                })
              );
              setEvent("");
              handleClose();
            }}
          />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
