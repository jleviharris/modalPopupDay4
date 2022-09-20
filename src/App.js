import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Modal } from "./Components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="App">
      <h1>Popup Modal</h1>
      <button onClick={openModal}>Test Modal</button>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
  // return (
  //   <div className="App">

  //   </div>
  // );
}

export default App;
