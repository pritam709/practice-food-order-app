import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        {props.children}
      </div>
    );
  };

  const BackDrop = (props) => {
    return <div className={classes.backdrop}></div>;
  };

  return (
    <>
      {" "}
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("modal"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modal")
      )}
    </>
  );
};
export default Modal;
