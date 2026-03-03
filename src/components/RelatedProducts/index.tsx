import "./RelatedProducts.scss"
import { ProductCard } from "../ProductCard"
import  productsData  from "../../data/products.json"
import { useState } from "react"
import { Modal } from "../Modal"
import type { Product } from "../types/Product"

export function RelatedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)

   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

const nextSlide = () => {
  if (currentIndex < productsData.products.length - 4) {
    setCurrentIndex(currentIndex + 1)
  }
}

const prevSlide = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1)
  }
}

  return (
    <section className="related">
      <div className="related__header">
        <div className="line"></div>
        <h2>Produtos relacionados</h2>
        <div className="line"></div>
        
        <div className="related__tabs">
          <span className="active">CELULAR</span>
          <span>ACESSÓRIOS</span>
          <span>TABLETS</span>
          <span>NOTEBOOKS</span>
          <span>TVS</span>
          <span>VER TODOS</span>
        </div>
      </div>


      <div className="related__carousel">
  <button onClick={prevSlide} className="arrow left">
    ◀
  </button>

  <div className="related__products-wrapper">
    <div
      className="related__products"
      style={{
        transform: `translateX(-${currentIndex * 25}%)`,
        transition: "transform 0.3s ease"
      }}
    >
      {productsData.products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onClick={() => setSelectedProduct(product)}
        />
      ))}
    </div>
  </div>

  <button onClick={nextSlide} className="arrow right">
    ▶
  </button>
</div>

      <Modal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </section>


  )
}