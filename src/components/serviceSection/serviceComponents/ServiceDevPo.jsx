import "./ServiceSection.css";

const ServiceDevPo = ({func}) => {
    const handleComponentClick = (id) => {
        func(id);
    }

    return (  
        <div className="service__main-component" style={{backgroundImage:'url("./service-section-dev.png")'}}>
            <h2 className="service__text-head">РАЗРАБОТКА ПО<span className="flare"></span></h2>
            <div className="service__grid-column">
                <div className="service__grid-column_block text-color_black">
                    <div className="service__block-rectangle background-color_grey text-color_black">
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
                    <div className="service__block-rectangle_mini">
                        <div className="rectangle-block_comp_one background-color_grey" onClick= {()=>handleComponentClick(3)}>
                            <a className="block_text_comp_h2">СБОРКА И РЕМОНТ ПК</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(3)}><img src="./miniature-service-repair.svg" /></div>
                        <div className="rectangle-block_comp_two background-color_grey" onClick= {()=>handleComponentClick(2)}>
                            <a className="block_text_comp_h2">ДИЗАЙН И МУЗЫКА</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(2)}><img src="./miniature-service-design.svg" /></div>
                        <div className="rectangle-block_comp_one background-color_grey" onClick= {()=>handleComponentClick(4)}>
                            <a className="block_text_comp_h2">ЧАТ-БОТЫ</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(4)}><img src="./miniature-service-bot.svg" /></div>
                        <div className="rectangle-block_comp_two background-color_grey" onClick= {()=>handleComponentClick(0)}>
                            <a className="block_text_comp_h2">КРАТКАЯ ИНФОРМАЦИЯ</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(0)}><img src="./miniature-service-main.svg" /></div>
                    </div>
                </div>
                <div className="service__grid-column_text text-color_white">
                    <a className="text-block_comp_two_h2">WEB-РАЗРАБОТКА</a>
                    <div className="line-block_head"></div>
                    <a className="text-block_comp_two_h3">Создание качественного сайта - залог успеха в цифровом мире. Наша команда профессионалов 
                        готова создать уникальный сайт, который будет отвечать всем вашим потребностям. Мы используем передовые технологии и 
                        методы SEO-оптимизации, чтобы помочь вам привлечь больше клиентов.</a>
                    <a className="text-block_comp_two_h2">DESKTOP-РАЗРАБОТКА</a>
                    <div className="line-block_head"></div>
                    <a className="text-block_comp_two_h3">Использование передовых технологий и методов, индивидуальный подход к каждому проекту и 
                        уделение особого внимания высокой проиводительности - залог нашего успеха в разработке настольных приложений для Windows. 
                        Если вам нужно эффективное настольное приложение, обращайтесь к нам – мы сделаем все возможное, чтобы ваше приложение было 
                        максимально полезным и удобным для использования.</a>
                    <a className="text-block_comp_two_h2">ANDROID-РАЗРАБОТКА</a>
                    <div className="line-block_head"></div>
                    <a className="text-block_comp_two_h3">Мы предоставляем профессиональные услуги по созданию мобильных приложений на Android, 
                        используя передовые технологии и методы разработки. Наша команда гарантирует высокую производительность и безопасность 
                        вашего приложения, а также индивидуальный подход к каждому проекту.</a>
                </div>
            </div>
        </div>
    );
}

export default ServiceDevPo;