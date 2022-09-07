import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleXmark, faHouse, faQuestion, faUser } from "@fortawesome/free-solid-svg-icons";


import logo from "../assets/logo.png";

import "../styles/Header.css";

import "../styles/Modal.css";



export default function Header() {
      const [ showState, setShowState ] = useState(false);
      console.log(showState);

      return (
            <>
                  <nav className="navbar header_content">
                        <div className="container">
                              <Link className="navbar-brand text-white" to="/">
                                    <FontAwesomeIcon icon={faHouse} className="icons" />
                              </Link>
                              <Link to="/" className='text-white'>
                                    <img className='logo' src={ logo } alt="I am here" />
                              </Link>
                              <div className='right_part__header'>
                                    <Link to="/"><FontAwesomeIcon icon={faUser} className="user icons" /></Link>
                                    <div className='icon_item'>
                                          <button  type="button" data-toggle="modal" data-target="#exampleModalLong" onClick={ () => setShowState(!showState) }>
                                                <FontAwesomeIcon icon={ faQuestion } className="question_mark" />
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </nav>
                  {showState ? (
                        <div onClick={ () => setShowState(!showState) } className="help_modal modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                              <div className="dialog_menu modal-dialog" role="document">
                                    <div className="modalContent modal-content">
                                          <div className="modal-header">
                                                <button onClick={ () => setShowState(!showState) } type="button" className="close closeModal" data-dismiss="modal" aria-label="Close">
                                                <FontAwesomeIcon className='xmark_icon' icon={faCircleXmark} />
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  ) : ""}
            </>
      );
}




/**
 * 
 * 
 * <div  onClick={ () => setShowState(!showState) } className="help_modal modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                              <div className="dialog_menu modal-dialog" role="document">
                                    <div className="modalContent modal-content">
                                          <div className="modal-header">
                                                <button onClick={ () => setShowState(!showState) } type="button" className="close closeModal" data-dismiss="modal" aria-label="Close">
                                                <FontAwesomeIcon className='xmark_icon' icon={faCircleXmark} />
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
 */