import "./FoterSection.css"

const FoterSection = ({ func }) => {
    return (
        <footer className="foter__basement-container">
            <div  className="foter__position-container">
                <div className="foter__position-text">
                    <h2 className="foter__text__header-block color__head__white">УСЛУГИ</h2>
                    <div className="foter__text__ordinary-block color__ordinary__gray">
                        <ul>
                            <li className="foter__text__list-style">
                                <a className="foter__text-animation" onClick={() => func("serviceSection")}>РАЗРАБОТКА ПО</a>
                            </li>
                            <li className="foter__text__list-style">
                                <a className="foter__text-animation" onClick={() => func("serviceSection")}>СБОРКА И РЕМОНТ ПК</a>
                            </li>
                            <li className="foter__text__list-style">
                                <a className="foter__text-animation" onClick={() => func("serviceSection")}>ДИЗАЙН И МУЗЫКА</a>
                            </li>
                            <li className="foter__text__list-style">
                                <a className="foter__text-animation" onClick={() => func("serviceSection")}>ЧАТ-БОТЫ</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="foter__position-text">
                    <h2 className="foter__text__header-block color__head__white">КОМПАНИЯ</h2>
                    <div className="foter__text__ordinary-block color__ordinary__gray">
                        <ul>
                            <li className="foter__text__list-style">
                                <a className="foter__text-animation" onClick={() => func("aboutSection")}>О КОМПАНИИ</a>
                            </li>
                            <li className="foter__text__list-style">
                                <a className="foter__text-animation" onClick={() => func("portfolioSection")}>ПОРТФОЛИО</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="foter__position-text">
                    <h2 className="foter__text__header-block color__head__white">СВЯЖИТЕСЬ С НАМИ</h2>
                    <div className="foter__text__ordinary-block color__ordinary__gray">
                        <ul>
                            <li className="foter__text__list-style">
                                <a>EMAIL: MP.NSK.DEV@GMAIL.COM</a>
                            </li>
                            <li className="foter__text__list-style">
                                <a>ТЕЛЕФОН: +7(995)-129-24-84</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="foter__position__logo">
                    <img src="./mplogo.png" alt="Company M and P Dev logo" className="header__logo__mobile"/>
                    <img src="./mp-logo-desctop.svg" alt="Company M and P Dev logo" className="header__logo__desctop"/>
                </div>
            </div>
            
            <div className="foter__position-copyright">
                <div className="foter__text__posititon-copyright color__head__white">
                    <a>© M&P NSK DEV, 2023</a>
                </div>
                <div className="foter__text__posotion-payment color__head__white">
                    <a>ПРИНИМАЕМ К ОПЛАТЕ</a>
                    <div className="foter__position-image">
                        <img src="./payment-footer-visa 1.png"/>
                        <img src="./payment-footer-mc 1.png"/>
                        <img src="./payment-footer-mir 1.png"/>
                    </div>
                </div>
            </div>
            {/* <!-- Yandex.Metrika counter -->
            <script type="text/javascript" >
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
                ym(93913855, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            </script>
            <noscript><div><img src="https://mc.yandex.ru/watch/93913855" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
            <!-- /Yandex.Metrika counter --> */}
        </footer>
    );
}

export default FoterSection;
