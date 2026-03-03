import "./Footer.scss"

export function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">

        <div className="footer__brand">
            <img src="/logoheader.png"/>

                <p className="footer__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

            <div className="footer__social">

                <div className="footer__icons">
                <img src="/instagram.png"/>
                <img src="/facebook.png"/>
                <img src="/linkedin.png"/>
            </div>
        </div>
        </div>

        <div className="footer__links">
          <h4>Institucional</h4>
          <a href="#">Sobre nós</a>
          <a href="#">Movimento</a>
          <a href="#">Trabalhe conosco</a>
        </div>

        <div className="footer__links">
          <h4>Ajuda</h4>
          <a href="#">Suporte</a>
          <a href="#">Fale Conosco</a>
          <a href="#">Perguntas Frequentes</a>
        </div>

         <div className="footer__links">
          <h4>Termos</h4>
          <a href="#">Termos e Condições</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Troca e Devolução</a>
        </div>

      </div>

      <div className="footer__bottom">
        Lorem ipsum dolar sit amet, consectetur adipiscing elit.
      </div>

    </footer>
  )
}