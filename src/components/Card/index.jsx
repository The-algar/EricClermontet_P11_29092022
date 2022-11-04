import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/DefaultPicture.svg'
import './Card.css'
function Card({ title, picture }) {
  return (
    <main className="cardWrapper">
      <p className="cardTitle">{title}</p>
      <img className="cardImage" src={picture} alt={title} />
    </main>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
  picture: DefaultPicture,
}

export default Card
