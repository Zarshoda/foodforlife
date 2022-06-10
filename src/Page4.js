import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import Sliderjs from './Slider';

export default function Page4(){
    return(
        <div className='wrap1'>
            <div className='block'>
                <h1 className='mb-2'>НАШИ ВИДЕО</h1>
                {/* <video src="https://vimeo.com/714160719" controls /> */}
                <div className='video' dangerouslySetInnerHTML={{__html: `
                  <div style="padding:56.25% 0 0 0;position:relative;">
                    <iframe src="https://player.vimeo.com/video/714160719?h=30e091024b&color=ffffff&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <script src="https://player.vimeo.com/api/player.js"></script>
                `}}/>
                <h1 className='mt-3 mb-3'>НАШИ ВОЛОНТЕРЫ</h1>
                <Sliderjs/>
                <h1 className='mt-2 mb-1'>НАШИ ЦЕЛИ</h1>
                <p className='text-center fw-bold mx-4 text'>Своим примером мы пропагандируем здоровый образ жизни свободный от алкоголя, табака, наркотиков и сквернословия. <br /> Наши образовательные и социальные программы позволяют обрести видение и сформулировать вдохновляющие цели, основанные на универсальных ценностях и принципах. <br /> Вы всегда можете стать частью нашего волонтерского движения и менять свое сознание вместе с нами - от благоПОЛУЧИЯ к благоДАРНОСТИ!</p>
                <h3 className='fw-bold text-center mt-3 mb-0'>КАК ПОМОЧЬ НАШЕМУ БЛАГОТВОРИТЕЛЬНОМУ ПРОЕКТУ?</h3>
                <div className="d-flex justify-content-center">
                    <button><a href="https://my.click.uz/services/pay?service_id=22224&merchant_id=13810">CLICK</a></button>
                    <button><a href="https://payme.uz/fallback/merchant/?id=6202553cb0159dc2d9e4530f">PayMe</a></button>
                    <button><a href="https://t.me/foodforlifevolunteers/54849">Расч.с</a></button>
                </div>
                <h3 className='fw-bold text-center mt-2 mb-0'>КАК С НАМИ СВЯЗАТЬСЯ?</h3>
                <div className="net d-flex justify-content-center mt-0">
                    <a href="https://instagram.com/foodforlife.uz?igshid=YmMyMTA2M2Y="><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.facebook.com/foodforlifeuz/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a href="https://t.me/foodforlifeuz"><FontAwesomeIcon icon={faTelegramPlane} /></a>
                </div>
                <div className='lang d-flex justify-content-center mt-0'>
                    <button><a href="#">ru</a></button>
                    <button><a href="#">uz</a></button>
                    <button><a href="#">en</a></button>
                </div>
                <h3 className='fw-bold text-center mt-2'>2022</h3>
            </div>
        </div>
    )
}