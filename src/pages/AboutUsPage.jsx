import React, {useEffect} from 'react';
import PopUp from '../components/header/js/PopUp';

const AboutUsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
        <div>
                  <PopUp/>

            O NAMA
            <p>
            Opis:

Dobrodošli u našu aplikaciju za šifriranje i dešifriranje poruka! Sigurnost i privatnost vaše komunikacije su nam na prvom mjestu.

Ključne značajke:

Jednostavno korištenje: Naša aplikacija je jednostavna za korištenje, čak i za one koji nisu stručnjaci za kriptografiju. Samo unosite poruke i odaberite ključeve.

Robusna sigurnost: Koristimo najnovije i najsigurnije šifrirajuće tehnike kako bismo osigurali da vaše poruke ostanu privatne i sigurne.

Brza i pouzdana komunikacija: Naša aplikacija vam omogućava brzo šifriranje i dešifriranje poruka kako biste mogli komunicirati bez problema.

Dijeljenje sigurnih poruka: Možete dijeliti šifrirane poruke s povjerenjem, znajući da su vaše poruke sigurne i nečitljive za neovlaštene osobe.

Upravljanje ključevima: Aplikacija vam omogućava jednostavno generiranje, spremanje i upravljanje ključevima za sigurnu komunikaciju.

Prilagodljiva opcija: Možete odabrati različite razine sigurnosti i metode šifriranja prema svojim potrebama.

Zašto odabrati nas:

Sigurnost prvog reda: Vaša sigurnost je naš prioritet. Koristimo najbolje prakse u svijetu kriptografije kako bismo osigurali da vaše poruke ostanu privatne i sigurne.

Jednostavnost korištenja: Ne trebate biti stručnjak za kriptografiju da biste koristili našu aplikaciju. Jednostavno i intuitivno sučelje čini šifriranje i dešifriranje brzim i jednostavnim.

Pouzdanost: Naša aplikacija je pouzdana i brza, omogućujući vam brzu komunikaciju bez zastoja.

Dijeljenje s povjerenjem: Možete dijeliti važne informacije s povjerenjem, znajući da su zaštićene od neovlaštenog pristupa.

Besplatno: Ponosno nudimo našu aplikaciju besplatno svim korisnicima. Sigurnost bi trebala biti dostupna svima.

Pridružite nam se i iskusite najvišu razinu sigurnosti u svojoj komunikaciji. Vaša privatnost je naša briga!
            </p>
        </div>
    );
};

export default AboutUsPage;