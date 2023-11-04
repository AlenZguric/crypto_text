import React, { useEffect } from "react";
import PopUp from "../components/header/js/PopUp";
import CopyRight from "../components/footer/js/CopyRight";
import "../pages/css/AboutPageStyle.css";
import TypeText from "../components/main/js/TypeText";
import { Link } from "react-router-dom";
import { translate } from "../translation/Translate";
import PageTitle from "../components/header/js/PageTitle"

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
      <PageTitle title={"About"}/>
      <PopUp />
      <div className="about-title">
        <h3>
          {translate("pageAbout", "title-h3")}
          <span>O</span>
        </h3>

        <TypeText
          text={translate("pageAbout", "typeText")}
          delay={30}
          initialDelay={1500}
          element="p"
        />
      </div>
      <div className="about-main">
        <main>
          <section className="about-section">
            <article>
              <h4>{translate("pageAbout", "about-h4")}</h4>
              <ul>
                <li>
                  <p>{translate("pageAbout", "li-p1")}</p>
                  <p>{translate("pageAbout", "li-p2")}</p>
                </li>
                <li>
                  <p>{translate("pageAbout", "li-p3")}</p>
                  <p>{translate("pageAbout", "li-p4")}</p>
                </li>
                <li>
                  <p>{translate("pageAbout", "li-p5")}</p>
                  <p>
                    {translate("pageAbout", "li-p6")}
                    <a href="#video-section" style={{ textDecoration: "none" }}>
                      {" "}
                      {translate("pageAbout", "li-p7")}
                    </a>
                  </p>
                </li>
                <li>
                  <p> {translate("pageAbout", "li-p8")}</p>
                  <p>{translate("pageAbout", "li-p9")}</p>
                </li>
                <li>
                  <p> {translate("pageAbout", "li-p10")}</p>
                  <p>{translate("pageAbout", "li-p11")}</p>
                </li>
                <li>
                  <p>{translate("pageAbout", "li-p12")}</p>
                  <p>{translate("pageAbout", "li-p13")}</p>
                </li>
              </ul>
            </article>
            <div className="video" id="video-section">
              <div className="title">
                <h2>{translate("pageAbout", "video-h2")}</h2>
                <p>{translate("pageAbout", "video-p")}</p>
              </div>
              <div className="youtube-video">
                <HowToUse />
              </div>
            </div>
          </section>
          <section className="policy">
            <hr />
            <h4>{translate("pageAbout", "section-h4")}</h4>

            <article>
              <p>{translate("pageAbout", "section-p")}</p>
              <ul>
                <li>
                  <Link to="/privacy">{translate("pageAbout", "link-privacy")}</Link>
                </li>
                <li>
                  <Link to="/privacy">{translate("pageAbout", "link-terms")}</Link>
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
