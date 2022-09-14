import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
      faCircleXmark,
      faHouse,
      faQuestion,
      faUser,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";

import "../styles/Header.css";

import "../styles/Modal.css";


export default function Header() {
      const [showState, setShowState] = useState(false);

      const showToUserHelpModal = () => {
            return setShowState(!showState)
      }

      return (
            <>
                  <nav className="navbar header_content">
                        <div className="container">
                              <Link className="navbar-brand text-white" to="/">
                                    <FontAwesomeIcon icon={ faHouse } className="icons" />
                              </Link>
                              <Link to="/" className="text-white">
                                    <img className="logo" src={ logo } alt="I am here" />
                              </Link>
                              <div className="right_part__header">
                                    <Link to="/">
                                          <FontAwesomeIcon icon={ faUser } className="user icons" />
                                    </Link>
                                    <div className="icon_item">
                                          <button
                                                onClick={ showToUserHelpModal }
                                                data-toggle="modal"
                                                type="button" data-target="#exampleModalCenter"
                                          >
                                                <FontAwesomeIcon icon={ faQuestion } className="question_mark" />
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </nav>
                  { showState ? (
                        <div className="header_modal modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
                        >
                              <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="header-modal_content modal-content">
                                          <div className="modal-content_border">
                                                <div className="close_menu-User_info">
                                                      <button type="button" data-dismiss="modal" className='userPhoto_modal'><FontAwesomeIcon icon={ faCircleXmark }
                                                            onClick={ showToUserHelpModal } /></button>
                                                </div>
                                                <div className="modal-content_inside">
                                                      <div className="modal-text modal-body">
                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum saepe aperiam cupiditate voluptate beatae, facilis, libero et accusantium expedita neque atque illum officia cum porro reiciendis odit sunt? Ex, earum?
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  ) : (
                        null
                  ) }
            </>
      );
}

