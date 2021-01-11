import React from 'react';
import ReactDOM from 'react-dom';
import {Tick} from '../assets/img'


const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
<React.Fragment>
    <div className="modal-overlay"/>
        <div onClick={hide}  className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <img src={Tick} alt='tick'/>
                <h1>Thank you!</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
            </div>
     </div>
</React.Fragment>, document.body
) : null;   


export default Modal
