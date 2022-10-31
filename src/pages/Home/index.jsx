import { useState, useEffect } from 'react'
import styled from 'styled-components'
import './Home.css'
import Banner from '../../components/Banner'
import Card from '../../components/Card/index'
import bannerImg from '../../assets/Home-Banner.png'
import { Link } from 'react-router-dom'

const CardsContainer = styled.div`
  display: grid;
  gap: 56px 60px 50px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
    @media only screen and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

function Home() {

    const [housingData, setHousingData] = useState([]);
    useEffect(() => {
        fetch("/logements.json")
            .then((resp) => resp.json())
            .then((responseData) => setHousingData(responseData))
            .catch((error) => console.log(error))
    }, [])

    return (
        <main>
            <Banner image={bannerImg}
                title="Chez vous, partout et ailleurs"
                description="Rochers en bord de mer"
                height="111px"
            />
            <CardsContainer>
            {housingData.map(({ id, cover, title }) => {
                return (<Link key={id} to={`/housing/${id}`}>
                    <Card imgCardUrl={cover} title={title} />
                </Link>)
            })}
            </CardsContainer>
        </main>
    )
}

export default Home
