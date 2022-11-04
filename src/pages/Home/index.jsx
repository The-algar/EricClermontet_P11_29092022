import { Link } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import homeImg from '../../assets/homeBanner.png'
import './Home.css'

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
    <>
      <Banner 
        picture={homeImg}
        title="Chez vous, partout et ailleurs"
        description="Rochers en bord de mer"
      />       
      {isLoading ? (
        <div className="loaderWrapper">
          <div className="Loader"/>
        </div>
      ) : (
        <section className="cardsContainer">
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
        </section>
      )}
    </>
  )
}

export default Home
