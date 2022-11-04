import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks'
import Carousel from '../../components/Carousel'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Host from '../../components/Host'
import Dropdown from '../../components/Dropdown'
import Error from '../../components/Error'
import './Housing.css'

function Housing() {
    const { id } = useParams();
    // utilisation custom hook useFetch
    const { data, isLoading, error } = useFetch('/logements.json');

    // si chargement fetch terminé, sélection location via id de l'url
    let housingData;

    if (data && data.length) {
        housingData = data.find((para) => {
            return para.id === id;
        });
    }
    // console.log("data:", housingData)

    if (error) {
        return <span>Oups il y a eu un problème de fetch</span>
    }

    return (
        <>
            {
                isLoading ? (
                <div className="loaderWrapper">
                    <span className="Loader"/>
                </div>
                ) : housingData ? (
                    <div>
                        <Carousel housingImgArr={housingData.pictures} />

                        <main className="HousingMain">
                            <div>
                                <h1 className="housingTitle">{housingData.title}</h1>
                                <p className="housingLocation">{housingData.location}</p>
                                <div className="housingTags">
                                    {
                                        housingData.tags.map((elTag, index) => {
                                            return (
                                                <Tag
                                                    tag={elTag}
                                                    key={`${elTag}-${index}`}
                                                />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className="hostAndRatingWrapper">
                                <Rating
                                    starZ={parseInt(housingData.rating)}
                                />

                                <Host
                                    hostName={housingData.host.name}
                                    hostImg={housingData.host.picture}
                                />
                            </div>
                        </main>
                        <section className="dropdownComponent">
                            <div className="housingDropdown">
                                <Dropdown
                                    heading="Description"
                                    content={housingData.description}
                                />
                            </div>
                            <div className="housingDropdown">
                                <Dropdown
                                    heading="Équipements"
                                    content={housingData.equipments}
                                />
                            </div>
                        </section>
                    </div>
                ) : (
                    <Error />
                )
            }
        </>
    );
}

export default Housing;