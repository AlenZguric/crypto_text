import React, { useEffect } from "react";
import PopUp from "../components/header/js/PopUp";
import CopyRight from "../components/footer/js/CopyRight";
import "../pages/css/AboutPageStyle.css";
import TypeText from "../components/main/js/TypeText";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  const HowToUse = () => {
    return (
      <div className="howToUse">
        <iframe
          width="400"
          height="195"
          src="https://www.youtube.com/embed/WY0HtLcQOxc"
          title="How To Use Crypto Text App"
          frameBorder="20"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="About-page">
      <PopUp />
      <div className="about-title">
        <h3>
          O Crypt<span>O</span>
        </h3>

        <TypeText
          text="Dobrodošli u aplikaciju za šifriranje
             i dešifriranje poruka! Sigurnost i
              privatnost vaše komunikacije su nam na prvom mjestu"
          delay={30}
          initialDelay={1500}
          element="p"
        />
      </div>
      <div className="about-main">
        <main>
          <section className="about-section">
            <article>
              <h4>Ključne značajke</h4>
              <ul>
                <li>
                  <p>Jednostavno korištenje</p>
                  <p>
                    Ne trebate biti stručnjak za kriptografiju da biste
                    koristili našu aplikaciju. Jednostavno i intuitivno sučelje
                    čini šifriranje i dešifriranje brzim i jednostavnim.
                  </p>
                </li>
                <li>
                  <p>Sigurnost</p>
                  <p>
                    Vaša sigurnost je naš prioritet. Koristimo najbolje prakse u
                    kriptografiji kako bismo osigurali da vaše poruke ostanu
                    privatne i sigurne.
                  </p>
                </li>
                <li>
                  <p>Brza i pouzdana komunikacija</p>
                  <p>
                    Naša aplikacija vam omogućava brzo šifriranje i dešifriranje
                    poruka kako biste mogli komunicirati bez problema
                    <a
                      href="https://www.youtube.com/watch?v=WY0HtLcQOxc"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      (Za upute pogledaj video)
                    </a>
                  </p>
                </li>
                <li>
                  <p>Dijeljenje sigurnih poruka</p>
                  <p>
                    Možete dijeliti šifrirane poruke s povjerenjem, znajući da
                    su vaše poruke sigurne i nečitljive za neovlaštene osobe
                  </p>
                </li>
                <li>
                  <p>Potpuno Besplatno</p>
                  <p>
                    Ponosno nudimo našu aplikaciju besplatno svim korisnicima.
                    Sigurnost bi trebala biti dostupna svima.
                  </p>
                </li>
                <li>
                  <p>Responzivan dizajn</p>
                  <p>Aplikacija je dostupna za mobilne uređaje i desktope.</p>
                </li>
              </ul>
            </article>
            <div className="video">
              <div className="title">
                <h2>Video Uputstva</h2>
                <p>kako koristi Crypto text web aplikaciju</p>
              </div>
              <div className="youtube-video">
                <HowToUse />
              </div>
            </div>
          </section>
          <section className="policy">
            <hr />
            <h4>Politika Privatnost i Uvjeti Korištenja</h4>

            <article>
              <p>Posjeti linkove dolje za više informacija</p>
              <ul>
                <li>
                  <Link to="/privacy">Politika Privatnosti</Link>
                </li>
                <li>
                  <Link to="/privacy">Uvjeti Korištenja</Link>
                </li>
              </ul>
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

export default AboutUsPage;
