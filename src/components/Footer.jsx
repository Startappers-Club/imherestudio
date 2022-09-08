import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import '../styles/Footer.css';
import { faTelegramPlane, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footerItems">
                    <div className="footerLeftContents">
                        <p className="imherestudio">imherestudio</p>
                        <p>Copyright © 2022</p>
                        <p>ИП Скареднова</p>
                        <p>Ксения Олеговна</p>
                    </div>
                </div>
                <div className="footerRegistration">
                    <Link to="/" className="socialNetwork"><FontAwesomeIcon className="telegram social_icons" icon={faTelegramPlane} /></Link>
                    <Link to="/" className="socialNetwork"><FontAwesomeIcon className="whatsapp social_icons" icon={faWhatsappSquare} /></Link>
                    <p>8 (906) 260-16-16</p>
                </div>
            </div>
        </footer>
    );
}
