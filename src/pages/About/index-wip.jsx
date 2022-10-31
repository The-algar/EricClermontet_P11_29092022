import { useEffect, useState } from 'react'
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
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [aboutData, setAboutData] = useState([])

    useEffect(() => {
    async function fetchAbout() {
      setLoading(true)
      try {
        const response = await fetch('./aboutData.json')
        const { aboutData } = await response.json()
        setAboutData(aboutData)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchAbout()
  }, [])

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