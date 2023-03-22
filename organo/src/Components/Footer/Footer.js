import React from "react"
import './Footer.css'

export default function Footer() {
    return (
    <footer className="footer">
      <section>
          <ul>
            <li>
              <a href="facebook.com" target="_blank">
                <img src="/images/fb.png" alt="imagem do facebook" />
              </a>
            </li>
            <li>
              <a href="twitter.com" target="_blank">
                <img src="/images/tw.png" alt="imagem do twitter" />
              </a>
            </li>
            <li>
              <a href="instagram.com" target="_blank">
                <img src="/images/ig.png" alt="imagem do instagram" />
              </a>
            </li>
          </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt="" />
      </section>
      <section>
        <p>
          Desenvolvido por Carlos Alan.
        </p>
      </section>
    </footer>
  )
}
