import React from 'react';
import InputCryptoTextComponent from "../components/main/js/InputCryptoTextComponent"
import InputTextComponent from "../components/main/js/InputTextComponent"

const HomePage = () => {
    return (
        <main>
            <section>
                <InputTextComponent/>
            </section>

            <section>
                <InputCryptoTextComponent/>
            </section>
        </main>
    );
};

export default HomePage;