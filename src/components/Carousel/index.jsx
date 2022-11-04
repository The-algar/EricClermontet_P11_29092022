import { useState, useRef, useEffect } from 'react';
import ChevronLeft from '../../assets/icon/chevron-left.svg';
import ChevronRight from '../../assets/icon/chevron-right.svg';
import './Carousel.css'

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
        <section className="carouselSection">
            <img className="carouselImg" src={HousingImg} alt={HousingImg} />
            <div
                ref={chevronL}
                className="chevronLeft"
                onClick={() =>
                    updateHousingImg(
                        housingImgArr.indexOf(HousingImg) === 0
                            ? housingImgArr[housingImgArr.length - 1]
                            : housingImgArr[housingImgArr.indexOf(HousingImg) - 1]
                    )
                }
            >
                <img src={ChevronLeft} alt="" />
            </div>
            <div
                ref={chevronR}
                className="chevronRight"
                onClick={() =>
                    updateHousingImg(
                        housingImgArr.indexOf(HousingImg) === housingImgArr.length - 1
                            ? housingImgArr[0]
                            : housingImgArr[housingImgArr.indexOf(HousingImg) + 1]
                    )
                }            
            >
                <img src={ChevronRight} alt="" />
            </div>
            <div className="housingCount"
                ref={count} >
                    {
                        (housingImgArr.indexOf(HousingImg) + 1) + "/" + housingImgArr.length
                    }
            </div>
        </section>
    );
}
