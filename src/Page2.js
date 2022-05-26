import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page2(){
    return(
        <div className='page2'>
            <h2 className='text-center fw-bold grey'>КАК ПОМОЧЬ НАШЕМУ БЛАГОТВОРИТЕЛЬНОМУ ПРОЕКТУ?</h2>
            <div className="d-flex justify-content-center">
                <button><a href="https://my.click.uz/services/pay?service_id=22224&merchant_id=13810">CLICK</a></button>
                <button><a href="https://payme.uz/fallback/merchant/?id=6202553cb0159dc2d9e4530f">PayMe</a></button>
                <button><a href="https://t.me/foodforlifevolunteers/54849">Расч.с</a></button>
            </div>
            <div className='my-3 mx-5 box'>
                <div className="d-flex justify-content-between">
                    <div>
                        <p className='fw-bold'>Единица</p>
                        <p><span>1</span> Акция кормления в приюте для бездомных <br /> = <span>2 000 000 сум</span></p>
                        <p><span>1</span> Комплект продуктов для малоимущих <br /> = <span>250 000 сум</span></p>
                        <p><span>1</span> Мастер-класс в детском доме <br /> = <span>2 000 000 сум</span></p>
                    </div>
                    <div className='hr'></div>
                    <div>
                        <p className='fw-bold'>Месяц</p>
                        <p><span>4</span> Акций кормления в приюте для бездомных <br /> = <span>8 000 000 сум</span></p>
                        <p><span>40</span> Комплектов продуктов для малоимущих <br /> = <span>10 000 000 сум</span></p>
                        <p><span>3</span> Мастер-класса в детских домах <br /> = <span>6 000 000 сум</span></p>
                    </div>
                </div>
                <h3 className='text-center mt-3'>Общая сумма, необходимая для сбора В МЕСЯЦ = <span>24 000 000 сум</span></h3>
            </div>
        </div>
    )
}