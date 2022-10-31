import { useParams, Redirect } from 'react-router-dom';
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/style/Slinks'

import './Housing.css';
import Carousel from '../../components/Carousel';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import Host from '../../components/Host';
import Dropdown from '../../components/Dropdown';

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
    console.log("data:", housingData)

    if (error) {
        return <span>Oups il y a eu un problème de fetch</span>
    }

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : housingData ? (
                    <div>
                        <Carousel housingImgArr={housingData.pictures} />

                        <main className="housingMain">
                            <div>
                                <h1 className="housingTitle">
                                    {housingData.title}
                                </h1>
                                <p className="housingLocation">
                                    {housingData.location}
                                </p>

                                <div className="housingPageTags">
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
                            <div className="ratingHostCont">
                                <Rating
                                    starNb={parseInt(housingData.rating)}
                                />

                                <Host
                                    renterName={housingData.host.name}
                                    renterImg={housingData.host.picture}
                                />
                            </div>
                        </main>
                        <section className="housingContDropdown">
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
                    <Redirect to="/404" />
                )
            }
        </>
    );
}

export default Housing;
