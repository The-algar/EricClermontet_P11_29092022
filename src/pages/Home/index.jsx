import { Link } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/style/Slinks'

import styled from 'styled-components'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import bannerImg from '../../assets/Home-Banner.png'

// const Gallery = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   max-width: 1240px !important;
//   background-color: #F6F6F6;
//   margin: 43px 100px 0;
//   border-radius: 19px;
//     @media only screen and (min-width: 992px) {
//       border-radius: 25px;
//     }
// `
 
const CardsContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  column-gap : 30px;
  row-gap: 20px;
  margin: 0 auto;
  min-width: 375px;
  background-color: unset;
  border-radius: 19px;
  padding-top: 22px;
  padding-bottom: 22px;
  justify-items: center;
    @media (min-width: 991px) {
    grid-gap: 60px;
    row-gap: 40px;
    background-color: #f6f6f6;
    grid-template-columns: repeat(2, 1fr);
    // grid-template-rows: auto;
    border-radius: 25px;
    padding: 56px 50px;
    margin: 43px 100px !important;
  }
    @media (min-width: 1240px) {
    max-width: 1240px !important;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;
    row-gap: 50px;
    padding: 56px 50px;
    // padding-bottom: 43px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Home() {
  // utilisation custom hook useFetch
  const { data, isLoading, error } = useFetch(`/logements.json`)

  // Ici le "?" permet de s'assurer que data existe bien.
  // eslint-disable-next-line no-unused-vars
  const housingsList = data?.housingsList

  if (error) {
    return <span>Oups il y a eu un problème de fetch</span>
  }

  return (
    <div>
      <Banner 
        image={bannerImg}
        title="Chez vous, partout et ailleurs"
        description="Rochers en bord de mer"
      />       
      {isLoading ? (
        <LoaderWrapper>
          <Loader/>
        </LoaderWrapper>
      ) : (
        // <Gallery>
        <CardsContainer>
          {data.map(({ id, cover, title }) => {
            return (
              <Link
                key={id}
                to={`/Housing/${id}`}
              >
              <Card
                picture={cover}
                title={title}
              />
              </Link>
            );
          })
        }
        </CardsContainer>
        // </Gallery>
      )}
    </div>
  )
}

export default Home
