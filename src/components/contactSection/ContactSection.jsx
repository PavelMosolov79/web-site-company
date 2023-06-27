import { useRef } from 'react';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactSection.css";

const ContactSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_65bu4ib', 'template_ngttqfm', form.current, '_S-49euX4EX98nuQn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const [isShown, setIsShown] = useState(false);
    const toggleFIeldset = () => {
        setIsShown(!isShown);
    };

    return (
        <div className="contact__container">
            <h2 className="contact__title">СВЯЖИТЕСЬ С НАМИ</h2>
            <div className="contact__title__line"/>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__form__container">
                    <div className="contact__form__container-line">
                        <input type="text" placeholder="ВАШЕ ИМЯ" className="contact__form__container-name" name="from_name"/>
                        <div className="contact__form__container-radio">
                            <div>
                                <label className="contact__form__container-type">
                                    <input type="radio" name="from_type" value="юр. лицо"/>
                                    ЮР. ЛИЦО
                                </label>
                            </div>
                            <div>
                                <label className="contact__form__container-type">
                                    <input type="radio" name="from_type" value="физ. лицо"/>
                                    ФИЗ. ЛИЦО
                                </label>
                            </div>
                        </div>
                        <input type="email" placeholder="EMAIL" className="contact__form__container-email" name="from_email"/>
                        <input type="text" placeholder="ТЕЛЕФОН" className="contact__form__container-phone"name="from_phone"/>
                        <textarea placeholder="ОПИШИТЕ ПОДРОБНО ВАШИ ПОЖЕЛАНИЯ" className="contact__form__container-task" name="from_task"/>
                    </div>
                    <div className="contact__form__container-line">
                        <div className="contact__form__container-info">
                            <div>EMAIL: MP.MSK.DEV@GMAIL.COM</div>
                            <div>ТЕЛЕФОН: +7(995)-129-24-84</div>
                        </div>
                        <input type="submit" className="contact__form__container-send" onClick={toggleFIeldset}/>
                    </div>
                    {isShown && 
                        <div className="contact__form-send__massege">
                            <div>Ваше сообщение отправлено, мы свяжемся с вами в ближайшее время!</div>
                        </div>
                    }
                </div>
            </form>
        </div>
    );
}

export default ContactSection;