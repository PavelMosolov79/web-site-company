import "./ServiceSection.css";

const MainServiceSection = ({func}) => {
    const handleComponentClick = (id) => {
        func(id);
    }

    return (
        <div className="service__main-component" style={{backgroundImage:'url("./service-section-repair.png")'}}>
            <h2 className="service__text-head">СБОРКА И РЕМОНТ ПК<span className="flare"></span></h2>
            <div className="service__grid-column">
                <div className="service__grid-column_text text-color_white">
                    <a className="text-block_comp_two_h2">ДИАГНОСТИКА И РЕМОНТ ПК</a>
                    <div className="line-block_head"></div>
                    <a className="text-block_comp_two_h3">Мы используем передовые технологии и инструменты, чтобы гарантировать высокое 
                        качество работы. Наша цель - обеспечить вам отличное функционирование ПК, восстановить его производительность 
                        и увеличить его срок службы. Не теряйте время и деньги на неэффективные попытки ремонта самостоятельно. 
                        Доверьтесь нашим экспертам, которые оперативно справятся с любыми проблемами вашего компьютера.</a>
                    <a className="text-block_comp_two_h2">УСТАНОВКА ПО</a>
                    <div className="line-block_head"></div>
                    <a className="text-block_comp_two_h3">Нуждаетесь в установке нового программного обеспечения? Мы предлагаем быструю 
                        и профессиональную услугу установки ПО для ваших компьютерных потребностей. Независимо от того, нужно вам установить 
                        операционную систему, офисное ПО или специализированное программное обеспечение, наша команда экспертов готова помочь вам.</a>
                    <a className="text-block_comp_two_h2">СБОРКА ПК</a>
                    <div className="line-block_head"></div>
                    <a className="text-block_comp_two_h3">Мечтаете о мощной и настраиваемой системе, которая удовлетворит все ваши компьютерные 
                        потребности? Наша команда экспертов предлагает профессиональную услугу по сборке ПК, чтобы создать идеальный компьютер, 
                        соответствующий вашим требованиям.</a>
                </div>
                <div className="service__grid-column_block">
                <div className="service__block-rectangle background-color_blue">
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
                    <div className="service__block-rectangle_mini">
                        <div className="rectangle-block_comp_one background-color_blue" onClick= {()=>handleComponentClick(4)}>
                            <a className="block_text_comp_h2">ЧАТ-БОТЫ</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(4)}><img src="./miniature-service-bot.svg" /></div>
                        
                        <div className="rectangle-block_comp_two background-color_blue" onClick= {()=>handleComponentClick(2)}>
                            <a className="block_text_comp_h2">ДИЗАЙН И МУЗЫКА</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(2)}><img src="./miniature-service-design.svg" /></div>
                        
                        <div className="rectangle-block_comp_one background-color_blue" onClick= {()=>handleComponentClick(1)}>
                            <a className="block_text_comp_h2">РАЗРАБОТКА ПО</a>
                        </div>
                        <div className="service__block-img_mini" onClick= {()=>handleComponentClick(1)}><img src="./miniature-service-dev.svg" /></div>
                        
                        <div className="rectangle-block_comp_two background-color_blue" onClick= {()=>handleComponentClick(0)}>
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