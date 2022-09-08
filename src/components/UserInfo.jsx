import { faChevronLeft, faChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import "../styles/UserInfo.css";

export default function UserInfo(props) {
    const [showModal, setShowModal] = useState(false);
    const [ activeModal, setActiveModal ] = useState(0);


    const showUserMessage = () => {
        setShowModal(!showModal);
        setActiveModal(props.id);
    }


    return (
        <>
            {showModal ? (
                <>
                    {activeModal === props.id ? (
                        <div className="userInfoModal modal fade" tabIndex="-1" role="dialog" id="userInfoModal"    aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className='close_menu-User_info'>
                                    <button  type="button" data-dismiss="modal" className='userPhoto_modal'><FontAwesomeIcon icon={faCircleXmark} /></button>
                                </div>
                                <div className="userInfoModal modal-body">
{                                console.log(props.img) }
                                    <img src={props.img} alt={ props.id } />
                                </div>
                                   <div className="carousel">
                                    <button className="left"><FontAwesomeIcon icon={ faChevronLeft } /></button>
                                    <div className="usersData">data <span>{props.id}</span></div>
                                    <button className="left"><FontAwesomeIcon icon={ faChevronRight } /></button>
                                </div>
                                <Link to={`base/${props.id}`} className="ok">OK</Link>
                            </div>
                        </div>
                    </div>
                    ) : null}
                    
                </>
            ) : ""}


            <div className="content">
                <img className='background_userInfo' src={props.img} alt={props.id} />
                <button onClick={showUserMessage} className="location"
                    type="button" data-toggle="modal" data-target="#userInfoModal"
                >{props.name}</button>
            </div>
        </>
    );
}


