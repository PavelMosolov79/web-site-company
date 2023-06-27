import "./AboutSection.css";

const AboutSection = ({ func }) => {
    return (
        <div className="about__container">
            <div className="about__header">
                <h2 className="about__header-text">О КОМПАНИИ</h2>
                <div className="about__header__line"/>
            </div>
            <div className="about__content">
                <div className="about__circuit about__circuit_left"/>
                <div className="about__circuit about__circuit_right"/>
                <div className="about__wrapper">
                    <div className="about__text-h3">
                        <h3>О НАС</h3>
                    </div>
                    <div className="about__wrapper_line">
                        <img src="/about1.svg"/>
                        <p>Компания M&P NSK DEV - первая компания в городе Новосибирск, предоставляющая иновационные  идеи в сфере IT</p>
                    </div>
                    <div className="about__text-h3">
                        <h3>СПЕКТР УСЛУГ</h3>
                    </div>
                    <div className="about__wrapper_line">
                        <img src="/about2.svg"/>
                        <p>Мы предлагаем нашим клиентам надежные приложения и сайты, эстетичные дизайнерские решения,
                            оригинальные саундтреки и музыкальные сопровождения, помогаем с рекламой и продвижением</p>
                    </div>
                    <div className="about__text-h3">
                        <h3>НАШИ ГАРАНТИИ</h3>
                    </div>
                    <div className="about__wrapper_line">
                        <img src="/about3.svg"/>
                        <p>Индивидуальный подход к каждому проекту, ведение от идеи до полной реализации, проработка мельчайших деталей, все это гарант нашей компании!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
