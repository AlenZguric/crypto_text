import React from "react";
import CopyRight from "../components/footer/js/CopyRight";
import "../pages/css/PrivacyAndTermPageStyle.css";

const PrivacyAndTerm = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-and-terms">
        <div className="title">
          <header>
            <p>
              Dobrodošli u Crypto Text aplikaciju! Korištenjem ove aplikacije,
              slažete se s uvjetima korištenja opisanim u nastavku. Ako se ne
              slažete s ovim uvjetima, nemojte koristiti aplikaciju.
            </p>
            <hr />
          </header>
        </div>

        <main>
          <section>
            <article>
              <h2 className="section-title">Uvjeti korištenja</h2>

              <ol>
                <li className="sub-section">
                  <p>
                    <strong>Opći uvjeti</strong>
                  </p>
                  <ul>
                    <li>
                      Aplikacija je besplatna i otvorena za korištenje svima.
                    </li>
                    <li>
                      Autor aplikacije se odriče svih odgovornosti za bilo kakvu
                      štetu ili gubitak podataka koji mogu nastati korištenjem
                      aplikacije.
                    </li>
                  </ul>
                </li>
                <li className="sub-section">
                  <p>
                    <strong>Kolačići</strong>
                  </p>
                  <ul>
                    <li>
                      Aplikacija koristi kolačiće (cookies) kako bi poboljšala
                      iskustvo korisnika.
                    </li>
                    <li>
                      Kolačići se koriste za spremanje odabranog jezika
                      (hrvatski ili engleski) u local storage radi prilagodbe
                      jezika korisniku.
                    </li>
                  </ul>
                </li>
              </ol>
            </article>
            <article>
              <h2 className="section-title">Pravila privatnosti</h2>
              <h4>
                Vaša privatnost nam je važna, stoga se obvezujemo čuvati i
                štititi vaše osobne podatke. <br /><br /> Ovdje su naša pravila privatnosti:
              </h4>
              <ol>
                <li className="sub-section">
                  <p><strong>Prikupljanje podataka</strong></p>
                  <ul>
                    <li>
                      Aplikacija ne prikuplja osobne podatke korisnika osim
                      jezika odabranog u aplikaciji (hrvatski ili engleski),
                      koji se sprema u local storage.
                    </li>
                  </ul>
                </li>
                <li className="sub-section">
                  <p><strong>Pohrana i sigurnost podataka</strong></p>
                  <ul>
                    <li>
                      Podaci koje unesete u komponentu za šifriranje i
                      dešifriranje teksta pohranjuju se u local storage
                      preglednika.
                    </li>
                    <li>
                      Podaci se ne dijele s trećim stranama i štite se od
                      neovlaštenog pristupa.
                    </li>
                  </ul>
                </li>
              </ol>
            </article>
          </section>
        </main>
      </div>
      <footer>
        <CopyRight />
      </footer>
    </div>
  );
};

export default PrivacyAndTerm;
