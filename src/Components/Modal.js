import React, { useRef } from "react";
import ReactDom from "react-dom";
export const Modal = ({ setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h2>This is a Modal</h2>
        <h3>
          This project was created for Day 4 of the 100 days of Javascript Udemy
          Course
        </h3>
        <h4>
          To see more of my completed projects please visit my{" "}
          <a target="_blank" href="https://devjonharrisportfolio.netlify.app/">
            personal portfolio
          </a>{" "}
        </h4>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
