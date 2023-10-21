import React from 'react'
import HistorySaveCryptoText from '../components/main/js/HistorySaveCryptoText'

export default function HistoryPage() {
  return (
    <div className='History-page'>
      <div className="title">
        <h2>Povijest</h2>

      </div>
      <main>
        <section>
          <div className="crypto_items">
          <HistorySaveCryptoText/>

          </div>
          <div className="decrypto_items">

          </div>
        </section>
      </main>
      </div>
  )
}
