import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components'
import chevronLeft from '../../assets/icon/chevron-left.svg';
import chevronRight from '../../assets/icon/chevron-right.svg';

const CarouselSection = styled.section`
  position: relative;
  display: flex;
  background: #FFFFFF;
  height: 255px;
  min-width: 395px;
  padding: 39px 0 0 0;
  margin: 0 10px 0;
    @media (min-width: 991px) {
      height: 415px;
      max-width: 1240px !important;
      padding: 37px 0 0 0;
      margin: 0 100px 0;
  }
`
const CarouselImg = styled.img`
    // position: absolute;
    -o-object-fit: cover;
       object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 10px;
      @media (min-width: 991px) {
      border-radius: 25px;
      }
`
const ChevronLeft = styled.img`
    position: absolute;
    top: 50%;
    left: 0px;
    padding-left: 5.84px;
    height: 19.8px;
    width: 11.67px;
      @media (min-width: 991px) {
      height: 79.2px;
      width: 46.68px;
      padding-left: 23.36px;
      }
`
const ChevronRight = styled.img`
    position: absolute;
    top: 50%;
    right: 0px;
    padding-right: 5.84px;
    height: 19.8px;
    width: 11.67px;
      @media (min-width: 991px) {
      height: 79.2px;
      width: 46.68px;
      padding-right: 23.36px;
      }
`
const HousingCount = styled.h2`
    display: none;
      @media (min-width: 991px) {
        display: block;
        position: absolute;
        padding-left:50%;
        bottom: 24.92px;
        font-size: 18px;
        color: white;
          &.hide {
          display: none; }
          }
`

export default function Carousel({ housingImgArr }) {
    
    const [HousingImg, updateHousingImg] = useState(housingImgArr[0]);

    // si une seule image, chevrons next, previous & compteur sont cachés
    const chevronL = useRef();
    const chevronR = useRef();
    const count = useRef();

    useEffect(() => {
        const elChevronL = chevronL.current;
        const elChevronR = chevronR.current;
        const elCount = count.current;

        if (housingImgArr.length === 1) {
            elChevronL.classList.add('hide');
            elChevronR.classList.add('hide');
            elCount.classList.add('hide');
        }
    });

    return (
        <CarouselSection>
            <CarouselImg src={HousingImg} alt={HousingImg} />
            <ChevronLeft 
                ref={chevronL}
                onClick={() =>
                    updateHousingImg(
                        housingImgArr.indexOf(HousingImg) === 0
                            ? housingImgArr[housingImgArr.length - 1]
                            : housingImgArr[housingImgArr.indexOf(HousingImg) - 1]
                    )
                }
                src={chevronLeft} alt=""
            >
            </ChevronLeft>
            <ChevronRight
                ref={chevronR}
                onClick={() =>
                    updateHousingImg(
                        housingImgArr.indexOf(HousingImg) === housingImgArr.length - 1
                            ? housingImgArr[0]
                            : housingImgArr[housingImgArr.indexOf(HousingImg) + 1]
                    )
                }
                src={chevronRight} alt=""                 
            >
            </ChevronRight>
            <HousingCount 
                ref={count} >
                    {
                        (housingImgArr.indexOf(HousingImg) + 1) + "/" + housingImgArr.length
                    }
            </HousingCount>
        </CarouselSection>
    );
}
