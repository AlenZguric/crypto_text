import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import CopyRight from '../components/footer/js/CopyRight';
import "../components/main/style/InputTextComponent.css";
import "../pages/css/HomePageStyle.css";
import ShareWebApp from '../components/footer/js/ShareWebApp';
import "../components/footer/css/ShareWebAppStyle.css";
import UseTechnology from '../components/footer/js/UseTechnology';
import ContactMe from '../components/footer/js/ContactMe';
import PopUp from '../components/header/js/PopUp';
import { translate } from "../translation/Translate";
import PageTitle from "../components/header/js/PageTitle"



const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
       <div className='home-page'>
        <PageTitle title={"Home"}/>
        <PopUp/>
            <div className="title">
                <main>
                    <h1>{translate("pageHome", "title-h1")}  <br /><span>CryptoText</span></h1>
                    <section>
                    <h2>{translate("pageHome", "title-h2")}</h2>
                    <ul>
                        <li>{translate("pageHome", "ul-li1")}</li>
                        <li>{translate("pageHome", "ul-li2")}</li>
                        <li>{translate("pageHome", "ul-li3")}</li>
                        <li>{translate("pageHome", "ul-li4")}</li>
                        <li>{translate("pageHome", "ul-li5")}</li>
                    </ul>
                    <div className="home-buttons">
                        <button className='crypto_btn'>
                            <Link to="/crypto">{translate("pageHome", "home-btn1")}</Link>
                        </button>
                        <button className="about_btn">
                            <Link to="/about">{translate("pageHome", "home-btn2")}</Link>
                        </button>
                    </div>
                    </section>                    
                </main>
             </div> 
             <div className="useTec">
                <UseTechnology/>
                <ShareWebApp/>
                </div>            
        <footer>
            <ContactMe/>
            <hr />
            <CopyRight/>
        </footer>
       </div>
    );
};

export default HomePage;
