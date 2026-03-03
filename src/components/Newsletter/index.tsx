import "./Newsletter.scss"

export function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__container">

        <div className="newsletter__text">
          <h3>Inscreva-se na nossa newsletter</h3>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <div className="newsletter__form">

          <div className="newsletter__inputs"> 
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <button>INSCREVER</button>
        </div>
        
          <div className="newsletter__checkbox">
            <input type="checkbox" />
            <span>Aceito os termos e condições</span>
          </div>
        </div>

      </div>
    </section>
  )
}