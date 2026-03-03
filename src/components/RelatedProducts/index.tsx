import "./RelatedProducts.scss"
import { ProductCard } from "../ProductCard"
import { useEffect, useState } from "react"

type Product = {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export function RelatedProducts() {
  return (
    <section className="related">
      <div className="related__header">
        <h2>Produtos relacionados</h2>

        <div className="related__tabs">
          <span className="active">CELULAR</span>
          <span>ACESSÓRIOS</span>
          <span>TABLETS</span>
          <span>NOTEBOOKS</span>
          <span>TVS</span>
          <span>VER TODOS</span>
        </div>
      </div>

      <div className="related__products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}