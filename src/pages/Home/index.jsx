import { useState, useEffect } from 'react'
import './Home.css'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import bannerImg from '../../assets/Home-Banner.png'
import { Link } from 'react-router-dom'

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
            {housingData.map(({ id, cover, title }) => {
                return (<Link key={id} to={`/housing/${id}`}>
                    <Card imgCardUrl={cover} title={title} />
                </Link>)
            })}
        </main>
    )
}

export default Home
