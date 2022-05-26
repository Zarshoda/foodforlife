import { useState } from 'react';
import Slider from 'react-slick';
import ShuhratUsmanov from './images/ShuhratUsmanov.jpg';
import GulyaZahidova from './images/GulyaZahidova.jpg';
import Farrux from './images/Farrux.jpg';
import FarruxFoto from './images/FarruxFoto.jpg';
import Maxich from './images/Maxich.jpg';
import MuhammadAli from './images/MuhammadAli.jpg';
import Natalya from './images/Natalya.jpg';
import {BsCaretRightFill, BsCaretLeftFill} from 'react-icons/bs';

let volunteers = [
    {image: ShuhratUsmanov, text: "Шухрат Усманов"},
    {image: GulyaZahidova, text: "Гуля Захидова"},
    {image: Natalya, text: "Наталья Захальская"},
    {image: FarruxFoto, text: "Фаррух Мотомоинсто"},
    {image: Maxich, text: "Махлие"},
    {image: MuhammadAli, text: "Мухаммад Абдуллаев"},
    {image: Farrux, text: "Фаррух"}
]

function Sliderjs(){

    const NextArrow = ({onClick}) => {
        return(
            <div className='arrow next' onClick={onClick}>
                <BsCaretRightFill />
            </div>
        );
    };

    const PrevArrow = ({onClick}) => {
        return(
            <div className='arrow prev' onClick={onClick}>
                <BsCaretLeftFill />
            </div>
        );
    };

    const [volunteerIndex, setVolunteerIndex] = useState(0);

    const sets = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding:0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setVolunteerIndex(next)
    };

    return(
        <div className='sliderjs'>
            <Slider {...sets}>
                {volunteers.map( (volunteer, idx) => 
                    <div className={idx == volunteerIndex ? "slide activeSlide" : "slide"}>
                        <img className='mb-0' src={volunteer.image} alt="volontyor" />
                        <p className='fw-bold text-center mt-0'>{volunteer.text}</p>
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default Sliderjs;