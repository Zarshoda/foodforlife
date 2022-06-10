import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faAlignJustify, faLanguage } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return(
        <div className="header d-flex align-items-center justify-content-between text-white">
            <p className='my-1 ms-3'>FOOD for LIFE</p>
            <div className='my-1 me-3'>
                <button><a href="https://instagram.com/foodforlife.uz?igshid=YmMyMTA2M2Y="><FontAwesomeIcon icon={faInstagram} /></a></button>
                <button><a href="https://www.facebook.com/foodforlifeuz/"><FontAwesomeIcon icon={faFacebookSquare} /></a></button>
                <button><a href="https://t.me/foodforlifeuz"><FontAwesomeIcon icon={faTelegramPlane} /></a></button>
                <button><a href="#"><FontAwesomeIcon icon={faLanguage} /></a></button>
                <button><FontAwesomeIcon icon={faAlignJustify} className='align'/></button>
            </div>
        </div>
    );
}