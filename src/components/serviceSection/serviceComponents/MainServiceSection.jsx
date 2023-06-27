import "./ServiceSection.css";

const MainServiceSection = ({func}) => { 
    const handleComponentClick = (id) => {
        func(id);
    }

    return (  
        <div className="service__main-component" style={{backgroundImage:'url("./service-section-main.png")'}}>
            <div className="service__head">
                <h2 className="service__text-head">НАШИ УСЛУГИ<span className="flare"></span></h2>
                {/* <div className="service__header__line"/> */}
            </div>
            <div className="service__blocks">
                {/* Block development PO */}
                <div className="service__block-rectangle background-color_grey text-color_black" onClick= {()=>handleComponentClick(1)}>
                    <div className="circle-miniature"><img src="./miniature-service-dev.svg" /></div>
                    <div>
                        <a className="service__text-block_black">РАЗРАБОТКА ПО</a>
                        <div className="line-block_top"></div>
                        <div className="service__block-center_style">
                            <a className="service__text-block_h3">WEB - РАЗРАБОТКА:</a>
                                <ul className="service__text-block_ul">
                                    <li>САЙТЫ ВИЗИТКИ</li>
                                    <li>КОРПОРАТИВНЫЕ САЙТЫ</li>
                                    <li>ИНТЕРНЕТ ВИТРИНЫ</li>
                                    <li>ТЕМАТИЧЕСКИЕ САЙТЫ</li>
                                </ul>
                            <a className="service__text-block_h3">ANDROID - РАЗРАБОТКА</a>
                            <a className="service__text-block_h3">DESKTOP - РАЗРАБОТКА</a>
                        </div>
                    </div>
                    <div className="service__block-cost">
                        <div className="line-block_bottom"></div>
                        <a className="service__text-block_black position__text-right">ОТ 10 000 руб.</a>
                    </div>
                </div>

                {/* Block design and music */}
                <div className="service__block-rectangle background-color_blue" onClick= {()=>handleComponentClick(2)}>
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

                {/* Block assem a repair */}
                <div className="service__block-rectangle background-color_blue" onClick= {()=>handleComponentClick(3)}>
                    <div className="circle-miniature"><img src="./miniature-service-repair.svg" /></div>
                    <div>
                        <a className="service__text-block_white">СБОРКА И РЕМОНТ ПК</a>
                        <div className="line-block_top"></div>
                        <div className="service__block-center_style">
                            <a className="service__text-block_h3">ДИАГНОСТИКА И РЕМОНТ ПК</a>
                            <a className="service__text-block_h3">УСТАНОВКА ПО</a>
                            <a className="service__text-block_h3">СБОРКА ПК</a>
                            <a className="service__text-block_h3">ГАРАНТИЯ НА ВСЕ ВИДЫ УСЛУГ</a>
                        </div>
                    </div>
                    <div className="service__block-cost">
                        <div className="line-block_bottom"></div>
                        <a className="service__text-block_white position__text-right">ОТ 1 000 руб.</a>
                    </div>
                </div>

                {/* Block development bot */}
                <div className="service__block-rectangle background-color_grey text-color_black" onClick= {()=>handleComponentClick(4)}>
                    <div className="circle-miniature"><img src="./miniature-service-bot.svg" /></div>
                    <div>
                        <a className="service__text-block_black">ЧАТ-БОТЫ</a>
                        <div className="line-block_top"></div>
                        <div className="service__block-center_style">
                            <a className="service__text-block_h3">НАПИСАНИЕ И ИНТЕГРАЦИЯ ЧАТ-БОТОВ
                                ПОД “Тelegram”, “WhatsApp”, “Вконтакте”</a>
                        </div>
                    </div>
                    <div className="service__block-cost">
                        <div className="line-block_bottom"></div>
                        <a className="service__text-block_black position__text-right">ОТ 2 000 руб.</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainServiceSection;