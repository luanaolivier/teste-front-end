import "./categories.scss"

const categories = [
    { name:"Tecnologia", icon: "/tecnologia.png", active: true},
    { name:"Supermercado", icon: "/supermercados.png" },
    { name:"Bebidas", icon: "/bebida.png" },
    { name:"Ferramentas", icon: "/ferramentas.png" },
    { name:"Saúde", icon: "/saude.png" },
    { name: "Esporte e Fitness", icon: "/corrida.png" },
    { name: "Moda", icon:"/moda.png" },
]

export function Categories() {
  return (
    <section className="categories">
      {categories.map((item, index) => (
        <div
          key={index}
          className={`categories__item ${item.active ? "active" : ""}`}
        >
          <div className="categories__box"> 
          <img src={item.icon} alt={item.name} />
          </div>

          <span>{item.name}</span>
        </div>
      ))}
    </section>
  )
}