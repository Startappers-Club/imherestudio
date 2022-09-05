import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHouse, faQuestion, faUser } from "@fortawesome/free-solid-svg-icons";


import "../styles/Header.css";
import Form from './Form';

export default function Header({setShowState, showState}) {
      // console.log(showState);
      return (
            <>
                  <nav className="navbar header_content bg-dark">
                        <div className="container-fluid">
                              <Link className="navbar-brand text-white" to="/">
                                    <FontAwesomeIcon icon={faHouse} className="icons" />
                              </Link>
                              <Link to="/" className='text-white logo'>Logo</Link>
                              <div className='right_part__header'>
                                    <Link to="/"><FontAwesomeIcon icon={faUser} className="user icons" /></Link>
                                    <div className='icon_item'>
                                          <button onClick={ () => setShowState(!showState) }>
                                                <FontAwesomeIcon icon={ faQuestion } className="question_mark" />
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </nav>

                  {!showState ? '' : <Form />}
            </>
      );
}




