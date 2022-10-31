import PropTypes from 'prop-types'
import styled from 'styled-components'
import DefaultPicture from '../../assets/DefaultPicture.svg'

const CardWrapper = styled.div`
  display: flex;
  justify-content: column;
  align-items: center;
  position: relative;
  border-radius: 10px;
  width: 335px;
  height: 255px;
  transition: 200ms;
  @media screen and (min-width: 991px) {
    width: 340px;
    height: 340px;
    }
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #2F2E41;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    border-radius: 10px;
  }
  &:hover::after {
    background: unset;
  }
`
const CardTitle = styled.div`
  position: absolute;
  display: flex;
  justify-content; flex-end;
  font-size: 14px;
  font-weight: 500;
  z-index: 2;
  color: white;
  margin-top: 188px;
  padding: 0 19.71px 15px 19.71px;
  @media screen and (min-width: 991px) {
      font-size: 18px;
      margin-top: 268px;
      padding: 0 20px 20px;
    }
  &:hover {
    font-size: 16px;
    font-weight: 500;
    color: black;
  }
}
`

const CardImage = styled.img`
  position: relative;
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    @media screen and (min-width: 992px) {
      width: 340px;
      height: 340px;
    }
    
`

function Card({ title, picture }) {

  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardImage src={picture} alt={title} />
    </CardWrapper>
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
