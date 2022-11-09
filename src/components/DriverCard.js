import Rating from "./Rating"

function DriverCard({ name, rating, img, car }) {

  return (
    <div className="driverguard creditcard">
      <div>
        <img className="avatar" src={img} alt={name} />
      </div>
      <div>
        <span class="nome">
          {name}
        </span>
        <Rating>{rating}</Rating>
        <div>
          {car.model} - {car.licensePlate}
        </div>
      </div>
    </div>

  )
}

export default DriverCard