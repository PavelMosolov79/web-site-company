import React, { useState, useRef, useEffect } from 'react'
import "./StockSection.css";

const StockSection = ({ func }) => {
    const Ref = useRef(null);
 
    const [timer, setTimer] = useState('00:30:00');
 
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
 
    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
                    = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
 
    const clearTimer = (e) => {  
        setTimer('00:30:00');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
 
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setMinutes(deadline.getMinutes() + 30);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
    
    return (
        <div className="stock__component">
            <div>
                <h2 className="stock__header__text">АКЦИЯ!</h2>
                <div className="stock__header__line"/>
            </div>
            <div className="stock__container">
                <div className="stock__container__image">
                    <img src="stock-section-image.png" alt="Приложение расписания"/>
                </div>
                <div className="stock__container__info">
                    <a className="stock__container__text__header">Офрми заявку прямо сейчас</a>
                    <a className="stock__container__text__all">И ПОЛУЧИ БЕСПЛАТНО ОБСЛУЖИВАНИЕ САЙТА В ТЕЧЕНИЕ 3 МЕСЯЦЕВ</a>
                    <a className="stock__container__text__timer">До конца акции осталось:</a>
                    <div className="stock__container-image__timer">
                        {timer}
                    </div>
                </div>
            </div>
            <div className="stock__button-container" onClick={() => func("contactSection")}>
                <button className="stock__button">заказать сейчас</button>
            </div>
        </div>
    );
}

export default StockSection;
