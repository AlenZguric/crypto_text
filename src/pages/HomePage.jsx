import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import CopyRight from '../components/footer/js/CopyRight';
import "../components/main/style/InputTextComponent.css";
import "../pages/css/HomePageStyle.css";
import ShareWebApp from '../components/footer/js/ShareWebApp';
import "../components/footer/css/ShareWebAppStyle.css";
import UseTechnology from '../components/footer/js/UseTechnology';
import ContactMe from '../components/footer/js/ContactMe';


const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
       <div className='home-page'>
            <div className="title">
                <main>
                    <h1>Dobrodoši  <br /><span>CryptoText</span></h1>
                    <section>
                    <h2>Besplatna Web Aplikacija za šifriranje texta...</h2>
                    <ul>
                        <li>Sigurnost na prvom mjestu</li>
                        <li>Dostupno na svim uređajima</li>
                        <li>Jednostavno i brzo</li>
                        <li> Podijelite sa sigurnošću</li>
                        <li>Besplatno i dostupno svim</li>
                    </ul>
                    <div className="home-buttons">
                        <button className='crypto_btn'>
                            <Link to="/crypto">Šifriraj</Link>
                        </button>
                        <button className="about_btn">
                            <Link to="/about">O Cryptu</Link>
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
