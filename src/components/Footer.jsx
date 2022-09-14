import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTelegramPlane, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";



import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footerItems">
                    <div className="footerLeftContents">
                        <p className="imherestudio">I`M HERE.studio</p>
                        <p>Copyright © 2022</p>
                        <p>ИП Скареднова</p>
                        <p>Ксения Олеговна</p>
                    </div>
                </div>
                <div className="rightFooterContent">
                    <div className="mail_address">
                        <Link to="/" className="mail_info-link">
                            <FontAwesomeIcon className="mail_info" icon={ faEnvelope } />
                        </Link>
                        <p>help@imhere.studio</p>
                    </div>
                    <div className="footerRegistration">
                        <Link to="/" className="socialNetwork"><FontAwesomeIcon className="telegram social_icons" icon={faTelegramPlane} /></Link>
                        <Link to="/" className="socialNetwork"><FontAwesomeIcon className="whatsapp social_icons" icon={faWhatsappSquare} /></Link>
                        <p className="footerRegistration_number">8 (906) 260-16-16</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
