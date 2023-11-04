import React from "react";
import CopyRight from "../components/footer/js/CopyRight";
import "../pages/css/PrivacyAndTermPageStyle.css";
import { translate } from "../translation/Translate";

const PrivacyAndTerm = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-and-terms">
        <div className="title">
          <header>
            <p>
          {translate("pagePrivacy", "title-p")}
            </p>
            <hr />
          </header>
        </div>

        <main>
          <section>
            <article>
              <h2 className="section-title">{translate("pagePrivacy", "title-h2")}</h2>

              <ol>
                <li className="sub-section">
                  <p>
                    <strong>{translate("pagePrivacy", "ol-p1")}</strong>
                  </p>
                  <ul>
                    <li>
                    {translate("pagePrivacy", "ol-li1")}
                    </li>
                    <li>
                    {translate("pagePrivacy", "ol-li2")}
                    </li>
                  </ul>
                </li>
                <li className="sub-section">
                  <p>
                    <strong>{translate("pagePrivacy", "ol-p2")}</strong>
                  </p>
                  <ul>
                    <li>
                    {translate("pagePrivacy", "ul-li1")}
                    </li>
                    <li>
                    {translate("pagePrivacy", "ul-li2")}
                    </li>
                  </ul>
                </li>
              </ol>
            </article>
            <article>
              <h2 className="section-title">{translate("pagePrivacy", "article-h2")}</h2>
              <h4>
              {translate("pagePrivacy", "article-h4-1")} <br /><br /> {translate("pagePrivacy", "article-h4-2")}
              </h4>
              <ol>
                <li className="sub-section">
                  <p><strong>{translate("pagePrivacy", "ol-li-p-li1")}</strong></p>
                  <ul>
                    <li>
                    {translate("pagePrivacy", "ol-li-p-li2")}
                    </li>
                  </ul>
                </li>
                <li className="sub-section">
                  <p><strong>{translate("pagePrivacy", "ol-li-p-li3")}</strong></p>
                  <ul>
                    <li>
                    {translate("pagePrivacy", "ol-li-p-li4")}
                    </li>
                    <li>
                    {translate("pagePrivacy", "ol-li-p-li5")}
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
