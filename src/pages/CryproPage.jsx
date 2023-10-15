import React, { useState, useEffect } from 'react';
import InputCryptoTextComponent from "../components/main/js/InputCryptoTextComponent"
import InputTextComponent from "../components/main/js/InputTextComponent"


export default function CryproPage() {

    const [showInputText, setShowInputText] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

  return (
    <div>
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
    </div>
  )
}
