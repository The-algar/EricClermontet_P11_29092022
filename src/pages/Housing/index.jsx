import { useParams, Redirect } from 'react-router-dom';
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/style/Slinks'
import styled from 'styled-components'
import Carousel from '../../components/Carousel'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating/index'
import Host from '../../components/Host'
import Dropdown from '../../components/Dropdown'
import Error from '../../components/Error'

const HousingMain = styled.main`
    min-width: 375px;
    margin: 0 10px 0;
    padding-bottom: 16.5px;
      @media screen and (min-width: 991px) {
        display: flex;
        justify-content: space-between;
        max-width: 1240px;
        padding-bottom: 36px;
        margin: 0 100px 0;
      }
`
const HousingTitle = styled.h1`
    font-size: 18px;
    font-weight: 500;
    color: #ff6060;
    margin: 15px 0 0 0;
    Line-height: 25.67px;
      @media screen and (min-width: 991px) {
        padding-top: 30px;
        margin:0;
        font-size: 36px;
        Line-height: 51.34px;
      }
`
const HousingLocation = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #ff6060;
    Line-height: 19.87px;
    margin: 0;
      @media screen and (min-width: 991px) {
        font-size: 18px;
        Line-height: 25.67px; 
        margin:0!important;
    }
`
const HousingTags = styled.div`
    display: flex;
    flex: wrap;
`
const HostAndRatingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    // align-content: center !important;
    padding-top: 6.5px;    
    align-items: center !important;
      @media screen and (min-width: 991px) {
        display: flex;
        flex-direction: column-reverse;
    }
`
const DropdownWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 395px;
    margin: 0 10px 0;
      @media screen and (min-width: 991px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 1240px;
        margin: 0 100px 0;
`
const HousingDropdown = styled.div`
    display: bloc;
    min-width: 395px;    
      @media screen and (min-width: 991px) {
        width: 100%;
        max-width: 582px;
`
const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

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
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
                ) : housingData ? (
                    <div>
                        <Carousel housingImgArr={housingData.pictures} />

                        <HousingMain>
                            <div>
                                <HousingTitle>{housingData.title}</HousingTitle>
                                <HousingLocation>{housingData.location}</HousingLocation>
                                <HousingTags>
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
                                </HousingTags>
                            </div>
                            <HostAndRatingWrapper>
                                <Rating
                                    starZ={parseInt(housingData.rating)}
                                />

                                <Host
                                    hostName={housingData.host.name}
                                    hostImg={housingData.host.picture}
                                />
                            </HostAndRatingWrapper>
                        </HousingMain>
                        <DropdownWrapper>
                            <HousingDropdown>
                                <Dropdown
                                    heading="Description"
                                    content={housingData.description}
                                />
                            </HousingDropdown>
                            <HousingDropdown>
                                <Dropdown
                                    heading="Équipements"
                                    content={housingData.equipments}
                                />
                            </HousingDropdown>
                        </DropdownWrapper>
                    </div>
                ) : (
                    <Redirect to={Error} />
                )
            }
        </>
    );
}

export default Housing;
