import "./Header.scss"

export function Header() {
  return (
    <header className="header">

      {/* Barra superior */}
      <div className="header__top">
        <div className="header__top-item">
            <img src="/comprasegura.png"/>
        <p>Compra <span>100% segura</span></p>
        </div>

        <div className="header__top-item">
            <img src="/fretesgratis.png"/>
        <p><span>Frete grátis</span> acima de R$ 200</p>
        </div>

        <div className="header__top-item">
            <img src="/parcelas.png"/>
        <p><span>Parcele</span> suas compras</p>
        </div>
      </div>

      {/* Parte principal */}
      <div className="header__main">

        <div className="header__logo">
            <img src="/logoheader.png"/>
        </div>

        <div className="header__search">
            <input type="text" placeholder="O que você está buscando?"/>
            <img src="/lupa.png"/>
        </div>

        <div className="header__icons">
            <img src="caixinha.png"/>
            <img src="coraçao.png"/>
            <img src="usuario.png"/>
            <img src="carrinho.png"/>
        </div>
      </div>

        

      {/* Menu */}
      <nav className="header__nav">
        <ul>
          <li className="bold">TODAS CATEGORIAS</li>
          <li>SUPER MERCADO</li>
          <li>LIVROS</li>
          <li>MODA</li>
          <li>LANÇAMENTOS</li>
          <li><span>OFERTA DO DIA</span></li>
          <li className="assinatura">
            <img src="/coroa.png"/>ASSINATURA</li>
        </ul>
      </nav>

    </header>
  )
}
