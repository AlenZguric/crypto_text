import React, { useState } from 'react';
import InputCryptoTextComponent from "../components/main/js/InputCryptoTextComponent"
import InputTextComponent from "../components/main/js/InputTextComponent"
import CopyRight from '../components/footer/js/CopyRight';
import "../components/main/style/InputTextComponent.css"

const HomePage = () => {
    const [showInputText, setShowInputText] = useState(true);

    return (
       <div className='home-page'>
        <h1>CRYPTO text</h1>
        <label className="toggle-switch">
            <input
                type="checkbox"
                checked={showInputText}
                onChange={() => setShowInputText(!showInputText)}
            />
            Zamjeni
        </label>
        <main>
           <section>
               {showInputText && <InputTextComponent />}
          </section>

          <section>
              {!showInputText && <InputCryptoTextComponent />}
          </section>
        </main>
        <footer>
            <CopyRight/>
        </footer>
       </div>
    );
};

export default HomePage;
