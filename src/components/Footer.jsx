import { faEnvelope, faPhone, faC } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import '../styles/Footer.css';


export default function Footer( { showState, setShowState }) {
    return (
        <footer>
            <div className="footerItems">
                <div className="footerLeftContents">
                    <button onClick={ () => setShowState(!showState) }><FontAwesomeIcon icon={faEnvelope} className="icons" /></button>
                    <p>vk</p>
                </div>
                <div className="footerRightContents">
                    <button><FontAwesomeIcon icon={faPhone} className="icons phone" /></button>
                    <p>1234567890</p>
                </div>
            </div>
            <div className="footerRegistration">
                <p><FontAwesomeIcon icon={ faC } /></p>
            </div>
        </footer>
    );
}
