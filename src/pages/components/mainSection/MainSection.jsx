import "./MainSection.css";

const MainSection = ({ func }) => {
  return (
    <div className="main__component">
      <header>
        <div className="header__logo">
          <img src="./mplogo.png" alt="Company M and P Dev logo" className="header__logo__mobile" />
          <img src="./mp-logo-desctop.svg" alt="Company M and P Dev logo" className="header__logo__desctop"/>
        </div>   
        <nav>
          <ul>
            <li>
              <a onClick={() => func("contactSection")}>КОНТАКТЫ</a>
            </li>
            <li>
              <a onClick={() => func("aboutSection")}>О КОМПАНИИ</a>
            </li>
            <li>
              <a onClick={() => func("serviceSection")}>УСЛУГИ</a>
            </li>
            <li>
              <a onClick={() => func("portfolioSection")}>ПОРТФОЛИО</a>
            </li>
          </ul>
        </nav>
      </header>
      
      <div className="main_container">
        <div className="content">
          <h2 className="text">
            ПРОСТОЙ ПУТЬ <br /> К САЙТУ ВАШЕЙ МЕЧТЫ
          </h2>
          <p className="subtext">
            изящные и современные идеи для вашего бизнеса
          </p>
        </div>
        <div className="button-container" onClick={() => func("contactSection")}>
          <button className="button">заказать сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;