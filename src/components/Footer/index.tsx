import "./Footer.scss"

export function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">

        <div className="footer__brand">
          <h2>LOGO</h2>
          <p>
            A melhor loja para você encontrar produtos incríveis.
          </p>
        </div>

        <div className="footer__links">
          <h4>Institucional</h4>
          <a href="#">Sobre nós</a>
          <a href="#">Política de privacidade</a>
          <a href="#">Termos de uso</a>
        </div>

        <div className="footer__links">
          <h4>Ajuda</h4>
          <a href="#">Trocas e devoluções</a>
          <a href="#">Entrega</a>
          <a href="#">Contato</a>
        </div>

        <div className="footer__social">
          <h4>Redes sociais</h4>
          <div className="footer__icons">
            <span>IG</span>
            <span>FB</span>
            <span>YT</span>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        © 2026 - Todos os direitos reservados.
      </div>

    </footer>
  )
}