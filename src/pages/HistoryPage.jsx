import React from "react";
import HistorySaveCryptoText from "../components/main/js/HistorySaveCryptoText";
import "../pages/css/HistoryPageStyle.css";
import CopyRight from "../components/footer/js/CopyRight";
import DecryptoHistorySaveCryptoText from "../components/main/js/DecryptoHistorySaveCryptoText";
import { translate } from "../translation/Translate";

export default function HistoryPage() {
  return (
    <div className="History-page">
      <div className="title">
        <h2>{translate("pageHistory", "h2")}</h2>
        <p>{translate("pageHistory", "p")}</p>
      </div>
      <main>
        <section>
          <div className="crypto_items">
            <HistorySaveCryptoText />
          </div>
          <div className="decrypto_items">
          <DecryptoHistorySaveCryptoText />

          </div>
        </section>
      </main>
      <footer>
        <CopyRight/>
      </footer>
    </div>
  );
}
