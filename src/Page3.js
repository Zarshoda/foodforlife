import 'bootstrap/dist/css/bootstrap.min.css';
import image from './images/photo.jpg';

export default function Page3(){
    return(
        <div className='wrap'>
            <div className='main'>
                <h1 className='fw-bold projects my-4 text-center'>НАШИ ПРОЕКТЫ</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-6 right mb-3">
                            <img src={image} alt="image" />
                        </div>
                        <div className="col-6 d-flex align-items-center mb-3">
                            <p>FOOD FOR LIFE (ПИЩА ЖИЗНИ) - крупнейшая в мире гуманитарная миссия по раздаче горячей пищи. Основана в 1974 году в Западной Бенгалии, с целью обеспечения вегетарианским питанием социально незащищённых слоёв населения, а также людей, пострадавших от стихийных бедствий и военных конфликтов вне зависимости от их расы, национальности, политических или религиозных убеждений. В настоящее время FOOD FOR LIFE в более чем 60 странах мира.</p>
                        </div>
                        <div className="col-6 d-flex align-items-center mb-3">
                            <p className='right'>FOOD FOR LIFE (ПИЩА ЖИЗНИ) - крупнейшая в мире гуманитарная миссия по раздаче горячей пищи. Основана в 1974 году в Западной Бенгалии, с целью обеспечения вегетарианским питанием социально незащищённых слоёв населения, а также людей, пострадавших от стихийных бедствий и военных конфликтов вне зависимости от их расы, национальности, политических или религиозных убеждений. В настоящее время FOOD FOR LIFE в более чем 60 странах мира.</p>
                        </div>
                        <div className="col-6 mb-3">
                            <img src={image} alt="image" />
                        </div>
                        <div className="col-6 right mb-3">
                            <img src={image} alt="image" />
                        </div>
                        <div className="col-6 d-flex align-items-center mb-3">
                            <p className='left'>FOOD FOR LIFE (ПИЩА ЖИЗНИ) - крупнейшая в мире гуманитарная миссия по раздаче горячей пищи. Основана в 1974 году в Западной Бенгалии, с целью обеспечения вегетарианским питанием социально незащищённых слоёв населения, а также людей, пострадавших от стихийных бедствий и военных конфликтов вне зависимости от их расы, национальности, политических или религиозных убеждений. В настоящее время FOOD FOR LIFE в более чем 60 странах мира.</p>
                        </div>
                        <div className="col-6 d-flex align-items-center mb-3">
                            <p className='right'>FOOD FOR LIFE (ПИЩА ЖИЗНИ) - крупнейшая в мире гуманитарная миссия по раздаче горячей пищи. Основана в 1974 году в Западной Бенгалии, с целью обеспечения вегетарианским питанием социально незащищённых слоёв населения, а также людей, пострадавших от стихийных бедствий и военных конфликтов вне зависимости от их расы, национальности, политических или религиозных убеждений. В настоящее время FOOD FOR LIFE в более чем 60 странах мира.</p>
                        </div>
                        <div className='col-6 mb-3'>
                            <img src={image} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}