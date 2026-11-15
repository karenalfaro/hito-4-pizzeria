import { formatPrice } from '../utils/formatPrice'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title text-capitalize">Pizza {name}</h5>
        <hr />

        <p className="text-center text-muted mb-1">Ingredientes:</p>
        <ul>
          {ingredients.map((ingrediente) => (
            <li key={ingrediente}>🍕 {ingrediente}</li>
          ))}
        </ul>
        <hr />

        <h4 className="text-center">Precio: ${formatPrice(price)}</h4>

        <div className="d-flex justify-content-around mt-3">
          <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza