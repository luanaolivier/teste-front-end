import "./ProductCard.scss"

type Product = {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

type Props = {
  product: Product
  onClick: () => void
}

export function ProductCard({ product, onClick}: Props) {
  return (
    <div className="product-card" onClick={onClick}>
      <img
        src={product.photo}
        alt={product.productName}
        className="product-card__image"
      />

      <h3 className="product-card__title">
        {product.productName}
      </h3>

      <span className="product-card__old-price">
        R$ {(product.price + 200).toLocaleString("pt-BR")}
      </span>

      <span className="product-card__price">
        R$ {product.price.toLocaleString("pt-BR")}
      </span>

      <span className="product-card__installments">
        ou 2x de R$ {(product.price / 2).toLocaleString("pt-BR")} sem juros
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