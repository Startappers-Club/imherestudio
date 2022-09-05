import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from '@fortawesome/free-solid-svg-icons'

import "../styles/Form.css";


export default function Form() {
    const [showModal, setShowModal] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setShowModal(!showModal);
    }

    return (
        <>
            {!showModal ? (
                <div className='form_container'>
                    <div className="closeModal">
                        <div className="close_form-menu" onClick={() => setShowModal(!showModal)}><FontAwesomeIcon icon={faClose} className="icon" /></div>
                    </div>
                    <form action="" onSubmit={onSubmit}>
                        <select name="place" id="" required>
                            <option value="select">Place select</option>
                            <option value="russia">Russia</option>
                        </select>
                        <textarea required name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        <button type="submit">send</button>
                    </form>

                </div>
            ) : ""}
        </>
    );
}
