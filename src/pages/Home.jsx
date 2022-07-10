import infoImg from "./../images/home.webp";
function Home(){
    return(
        <div>
            <div className='home'>
                <div className='home__box'>
                    <div className='home__box__item'>
                        <picture className='home__box__item__picture'>
                            <img src={infoImg} alt={'home-image'} className='home__box__item__picture--img' />
                        </picture>
                        <div className='home__box__item__info'>
                            <h2 className='home__box__item__info--title'>A qué nos dedicamos?</h2>
                            <p className='home__box__item__info--content'>
                                    Repostería Beula se dedica a satisfacer el paladar de todos nuestros clientes, <b>desde el más chico al más grande</b>, poniendo todo nuestro amor y dedicación a nuestros trabajos y horneando las más deliciosas tortas.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;