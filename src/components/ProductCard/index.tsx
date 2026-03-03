import "./ProductCard.scss"

export function ProductCard() {
  return (
    <div className="product-card">
      <img
        src="/iphone.png"
        alt="Produto"
        className="product-card__image"
      />

      <h3 className="product-card__title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h3>

      <span className="product-card__old-price">
        R$ 30,00
      </span>

      <span className="product-card__price">
        R$ 28,90
      </span>

      <span className="product-card__installments">
        ou 2x de R$49,95 sem juros
      </span>

      <span className="product-card__shipping">
        Frete grátis
      </span>

      <button className="product-card__button">
        COMPRAR
      </button>
    </div>
  )
}