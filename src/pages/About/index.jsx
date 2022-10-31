import { useState } from 'react'
import { Loader } from '../../utils/style/Slinks'

import styled from 'styled-components'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
import aboutImg from '../../assets/aboutBanner.jpg'

const DropdownWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 375px;
    margin: 0 10px;
      @media screen and (min-width: 991px) {
        // justify-content: space-around;
        max-width: 1240px;
        margin: 0 100px;
      }
`
const AboutDropdown = styled.section`
    width: 100%;
    padding-top: 16.5px;
      @media screen and (min-width: 991px) {
        max-width: 1023px;
        padding-top: 36px;
        // margin: 0 100px 0;
      }
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Apropos() {
const [isLoading] = useState(false)
const [error] = useState(false)

const aboutData = [
    {
        heading: 'Fiabilité',
        description:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        heading: 'Respect',
        description:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        heading: 'Service',
        description:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        heading: 'Sécurité',
        description:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
]

  if (error) {
    return <span>Oups il y a eu un problème de fetch</span>
  }

  return (
      <div>
        <Banner 
          picture={aboutImg}
          height="223px" 
          title=""
          description="Montagne enneigée"
        />       
        {isLoading ? (
        <LoaderWrapper>
          <Loader/>
        </LoaderWrapper>
        ) : (      
          <DropdownWrapper>
            <AboutDropdown>
            {aboutData.map((el, index) => (
              <Dropdown
                heading={el.heading}
                content={el.description}
                key={`${el.heading}-${index}`}
              />
            ))}
            </AboutDropdown>
          </DropdownWrapper>
        )}
      </div>
  )
}

export default Apropos