import React, { useState, useEffect } from 'react';
import InputCryptoTextComponent from "../components/main/js/InputCryptoTextComponent"
import InputTextComponent from "../components/main/js/InputTextComponent"
import CopyRight from '../components/footer/js/CopyRight';
import "../components/main/style/InputTextComponent.css";
import "../pages/css/HomePageStyle.css";
import ShareWebApp from '../components/footer/js/ShareWebApp';

const HomePage = () => {
    const [showInputText, setShowInputText] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
       <div className='home-page'>
        <h1>CRYPTO text</h1>
        <main>
        <label className="toggle-switch">
            <input
                type="checkbox"
                checked={showInputText}
                onChange={() => setShowInputText(!showInputText)}
            />
            Zamjeni
        </label>
           <section>
               {showInputText && <InputTextComponent />}
          </section>

          <section>
              {!showInputText && <InputCryptoTextComponent />}
          </section>
        </main>
        <footer>
            <ShareWebApp/>
            <CopyRight/>
        </footer>
       </div>
    );
};

export default HomePage;
