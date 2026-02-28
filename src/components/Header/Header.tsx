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
        <img src="/logo header.png"/>  
      </div>

        <div className="header__search">
            <img src="/lupa.png"/>
          <input type="text" placeholder="O que você está buscando?" />
        </div>

        <div className="header__icons">
          <span>👤</span>
          <span>❤</span>
          <span>🛒</span>
        </div>
    

      {/* Menu */}
      <nav className="header__nav">
        <ul>
          <li>Todas Categorias</li>
          <li>Super Ofertas</li>
          <li>Livros</li>
          <li>Moda</li>
          <li>Lançamentos</li>
        </ul>
      </nav>

    </header>
  )
}
