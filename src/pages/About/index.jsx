import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
import aboutImg from '../../assets/aboutBanner.jpg'
import './About.css'

function Apropos() {
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

  return (
      <div>
        <Banner 
          picture={aboutImg}
          height="223px" 
          title=""
          description="Montagne enneigée"
        />           
          <section className="dropdownContainer">
            <div className="aboutDropdown">
            {aboutData.map((el, index) => (
              <Dropdown
                heading={el.heading}
                content={el.description}
                key={`${el.heading}-${index}`}
              />
            ))}
            </div>
          </section>
      </div>
  )
}

export default Apropos