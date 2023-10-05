import React, { useState } from 'react';
import InputCryptoTextComponent from "../components/main/js/InputCryptoTextComponent"
import InputTextComponent from "../components/main/js/InputTextComponent"
import "../pages/css/HomePageStyle.css"

const HomePage = () => {
    const [showInputText, setShowInputText] = useState(true);

    return (
       <div className='home-page'>
        <h1>Home Page</h1>
        <label className="toggle-switch">
            <input
                type="checkbox"
                checked={showInputText}
                onChange={() => setShowInputText(!showInputText)}
            />
            Toggle Switch
        </label>
        <main>
           <section>
               {showInputText && <InputTextComponent />}
          </section>

          <section>
              {!showInputText && <InputCryptoTextComponent />}
          </section>
        </main>
       </div>
    );
};

export default HomePage;
