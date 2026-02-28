import "./Hero.scss"

export function Hero () {
    return (
        <section className="hero">
            <div className="hero_content">
                <h1>Venha conhecer nossas <br/>
                    promoções</h1>
                <p>
                    <strong>50% off</strong> nos produtos
                </p>
                <button>Ver produto</button>
            </div>
        </section>
    )
}