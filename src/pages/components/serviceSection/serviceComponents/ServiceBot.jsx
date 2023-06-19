import "./ServiceSection.css";

const MainServiceSection = ({func}) => {
    const handleComponentClick = (id) => {
        func(id);
    }

    return (
        <div className="service__main-component" style={{backgroundImage:'url("./service-section-bot.png")'}}>
            <h2 className="service__text-head">ЧАТ-БОТЫ<span className="flare"></span></h2>
            <div className="service__grid-column">
                <div className="service__grid-column_text text-color_white">
                    <a className="text-block_comp_two_h2">НАПИСАНИЕ ЧАТ БОТОВ</a>
                    <div className="line-block_head"></div>
                    <a className="text-block_comp_two_h3">Чат-бот, который упрощает вашу жизнь!

                        Ищете инновационный способ автоматизировать коммуникацию с вашими клиентами или улучшить обслуживание 
                        на вашем веб-сайте? Наша команда экспертов по разработке чат-ботов предлагает профессиональные услуги 
                        по созданию умных и эффективных чат-ботов.

                        Мы разработаем чат-бота, который общается с вашими клиентами, отвечает на их вопросы, предоставляет 
                        информацию о ваших продуктах и услугах, а также помогает решать проблемы и проводить транзакции. 
                        Чат-боты могут быть интегрированы на вашем веб-сайте, в мессенджерах или в других платформах коммуникации.</a>
                </div>
                <div className="service__grid-column_block text-color_black">
                    <div className="service__block-rectangle background-color_grey text-color_black">
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
                    <div className="service__block-rectangle_mini">
                        <div className="rectangle-block_comp_one background-color_grey" onClick= {()=>handleComponentClick(3)}>
                            <a className="block_text_comp_h2">СБОРКА И РЕМОНТ ПК</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(3)}><img src="./miniature-service-repair.svg" /></div>
                        
                        <div className="rectangle-block_comp_two background-color_grey" onClick= {()=>handleComponentClick(2)}>
                            <a className="block_text_comp_h2">ДИЗАЙН И МУЗЫКА</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(2)}><img src="./miniature-service-design.svg" /></div>
                        
                        <div className="rectangle-block_comp_one background-color_grey" onClick= {()=>handleComponentClick(1)}>
                            <a className="block_text_comp_h2">РАЗРАБОТКА ПО</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(1)}><img src="./miniature-service-dev.svg" /></div>
                        
                        <div className="rectangle-block_comp_two background-color_grey" onClick= {()=>handleComponentClick(0)}>
                            <a className="block_text_comp_h2">КРАТКАЯ ИНФОРМАЦИЯ</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(0)}><img src="./miniature-service-main.svg" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainServiceSection;