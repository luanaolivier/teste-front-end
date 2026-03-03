type Product = {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

type Props = {
  product: Product | null
  onClose: () => void
}

import "./Modal.scss"
import { useState } from "react"



export function Modal({ product, onClose }: Props) {
  if (!product) return null

const [quantity, setQuantity] = useState(1)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-content">

          <div className="modal-image">
            <img
              src={product.photo}
              alt={product.productName}
            />
          </div>

          <div className="modal-info">
            <h2 className="modal-title">
              {product.productName}
            </h2>

            <span className="modal-price">
              R$ {product.price}
            </span>

            <p className="modal-description">
              Many desktop publishing packages and web page 
              editors now many desktop publishing
            </p>

            <span className="modal-details">
              Veja mais detalhes do produto &gt;
            </span>

            <div className="quantity">
  <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>
    -
  </button>

  <span>{quantity}</span>

  <button onClick={() => setQuantity(q => q + 1)}>
    +
  </button>
</div>

              <button className="modal-buy">
                COMPRAR
              </button>
            </div>
          </div>

        </div>
      </div>
  )
}