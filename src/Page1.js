import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './images/02.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page1(){
    return(
        <div className='wrap0'>
            <div className='page1 pt-3 mb-5'>
                <div className='d-flex p-2'>
                    <img src={logo} alt="logo" className='logo1'/>
                    <div className='text-center m-4'>
                        <p className='fw-bold bigger'><span>FOOD</span> for <span>LIFE</span></p>
                        <p className='smaller'>БЛАГОТВОРИТЕЛЬНЫЙ ВОЛОНТЁРСКИЙ ПРОЕКТ</p>
                    </div>
                </div>
                <div className='d-flex buttons'>
                    <button><FontAwesomeIcon icon={faCircle}/></button>
                    <button><FontAwesomeIcon icon={faCircle}/></button>
                    <button><FontAwesomeIcon icon={faCircle}/></button>
                </div>
            </div>
        </div>
    )
}