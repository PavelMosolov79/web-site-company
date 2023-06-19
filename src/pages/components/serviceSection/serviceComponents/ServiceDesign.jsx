import "./ServiceSection.css";

const ServiceDesign = ({func}) => {
    const handleComponentClick = (id) => {
        func(id);
    }

    return ( 
        <div className="service__main-component" style={{backgroundImage:'url("./service-section-design.jpg")'}}>
            <h2 className="service__text-head">ДИЗАЙН И МУЗЫКА<span className="flare"></span></h2>
            <div className="service__grid-column">
                <div className="service__grid-column_block">
                    <div className="service__block-rectangle background-color_blue">
                        <div className="circle-miniature"><img src="./miniature-service-design.svg" /></div>
                        <div>
                            <a className="service__text-block_white">ДИЗАЙН И МУЗЫКА</a>
                            <div className="line-block_top"></div>
                            <div className="service__block-center_style">
                                <a className="service__text-block_h3">ИНДИВИДУАЛЬНЫЙ ДИЗАЙН</a>
                                <a className="service__text-block_h3">РЕДИЗАЙН САЙТА И ПРИЛОЖЕНИЯ</a>
                                <a className="service__text-block_h3">НАПИСАНИЕ САУНДТРЕКОВ:</a>
                                <ul className="service__text-block_ul">
                                    <li>ДЛЯ ИГР И ПРИЛОЖЕНИЙ</li>
                                    <li>МЕРОПРИЯТИЙ</li>
                                    <li>ИСПОЛНИТЕЛЕЙ</li>
                                </ul>
                            </div>
                        </div>
                        <div className="service__block-cost">
                            <div className="line-block_bottom"></div>
                            <a className="service__text-block_white position__text-right">ОТ 3 000 руб.</a>
                        </div>
                    </div>
                    <div className="service__block-rectangle_mini">
                        <div className="rectangle-block_comp_one background-color_blue" onClick= {()=>handleComponentClick(3)}>
                            <a className="block_text_comp_h2">СБОРКА И РЕМОНТ ПК</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(3)}><img src="./miniature-service-repair.svg" /></div>
                        
                        <div className="rectangle-block_comp_two background-color_blue" onClick= {()=>handleComponentClick(1)}>
                            <a className="block_text_comp_h2">РАЗРАБОТКА ПО</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(1)}><img src="./miniature-service-dev.svg" /></div>
                        
                        <div className="rectangle-block_comp_one background-color_blue" onClick= {()=>handleComponentClick(4)}>
                            <a className="block_text_comp_h2">ЧАТ-БОТЫ</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(4)}><img src="./miniature-service-bot.svg" /></div>
                        
                        <div className="rectangle-block_comp_two background-color_blue" onClick= {()=>handleComponentClick(0)}>
                            <a className="block_text_comp_h2">КРАТКАЯ ИНФОРМАЦИЯ</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(0)}><img src="./miniature-service-main.svg" /></div>
                    </div>
                </div>
                <div className="service__grid-column_text text-color_white">
                    <a className="text-block_comp_two_h2">ИНДИВИДУАЛЬНЫЙ ДИЗАЙН</a>
                    <div className="line-block_head"></div>
                    <a className="text-block_comp_two_h3">Сайт, который выделяется из толпы!
                        Хотите иметь уникальный и привлекательный веб-сайт, который подчеркивает вашу уникальность и привлекает внимание 
                        посетителей? Наша команда специалистов по веб-дизайну предлагает индивидуальный дизайн сайта, который будет отражать 
                        вашу уникальность и соответствовать вашим потребностям.</a>
                    <a className="text-block_comp_two_h2">РЕДИЗАЙН</a>
                    <div className="line-block_head"></div>
                    <a className="text-block_comp_two_h3">Ваш веб-сайт или приложение выглядят устаревшими и не привлекают достаточное внимание 
                        пользователей? Наша команда экспертов по редизайну предлагает профессиональные услуги, чтобы освежить и 
                        улучшить ваш веб-сайт или приложение.</a>
                    <a className="text-block_comp_two_h2">НАПИСАНИЕ САУНДТРЕКОВ</a>
                    <div className="line-block_head"></div>
                    <a className="text-block_comp_two_h3">Ищете идеальный саундтрек для вашего фильма, видеоигры или рекламы? Наша команда опытных 
                        композиторов предлагает профессиональные услуги по написанию саундтреков, чтобы подчеркнуть и усилить эмоции и настроение 
                        вашего проекта. Мы пристально изучим ваше видение и требования, чтобы создать оригинальную и захватывающую музыку, которая 
                        поддерживает и усиливает сюжет и эстетику вашего проекта.</a>
                </div>
            </div>
        </div>
    );
}

export default ServiceDesign;