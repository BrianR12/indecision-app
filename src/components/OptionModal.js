import React from 'react';
import Modal from 'react-modal';

//implicit return
const OptionModal = (props) => (
       <Modal   
        isOpen ={!!props.selectedOption}
        onRequestClose = {props.handleClearSelectedOption}
        contentLabel ="selected Option"
        closeTimeoutMS = {200}
        className="modal"
        >
        <h3 className="modal__title"> Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>ok</button>
        </Modal>
);

export default OptionModal;

//create a new event handler in indecisionApp that clears selectedOption state
//pass that into OptionModal
//call it on button click