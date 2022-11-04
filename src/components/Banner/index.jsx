import PropTypes from 'prop-types'
import './Banner.css'

function Banner({ title, picture, description, height }) {
  return (
    <section className="bannerWrapper" style={{ height: height }}>
      <h1 className="bannerTitle">{title}</h1>
      <img src={picture} alt={description} />
    </section>
  )
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Banner.defaultProps = {
  title: '',
  picture: '',
}

export default Banner