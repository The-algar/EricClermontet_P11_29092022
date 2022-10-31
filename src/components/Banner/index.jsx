import styled from 'styled-components'
import PropTypes from 'prop-types'

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 335px;
  position: relative;
  border-radius: 10px;
  padding-top: 19.71px;
  margin: 0 20px 0;
  @media screen and (min-width: 991px) {
    max-width: 1240px;
    border-radius: 25px;
    padding-top: 68.37px;
    margin: 0 100px 0;
    }
`
const BannerTitle = styled.div`
    position: absolute;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    display: flex;
    align-items: flex-end;
    color: #FFFFFF;
    padding: 31px 85px 32px 33px;
    z-index: 2;
    @media screen and (min-width: 991px) {
        font-size: 3rem;
        font-weight: 500;
        line-height: 68.45px;
        // padding: 78px 262px;
    }
}
`
const BannerImage = styled.img`
    -o-object-fit: cover;
       object-fit: cover;
    height: 100%;
    width: 100%;
    min-width: 335px;
    -webkit-filter: brightness(70%);
            filter: brightness(70%);
    border-radius: 10px;
      @media screen and (min-width: 991px) {
        max-width: 1240px;
        border-radius: 25px;
        }
`
function Banner({ title, picture, description, height }) {

  return (
    <BannerWrapper style={{ height: height }}>
      <BannerTitle>{title}</BannerTitle>
      <BannerImage src={picture} alt={description} />
    </BannerWrapper>
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