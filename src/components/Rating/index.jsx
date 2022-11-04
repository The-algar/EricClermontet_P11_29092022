// import styled from 'styled-components'
import Stars from '../../assets/icon/star.svg';
import RedStars from '../../assets/icon/fullStar.svg';
import './Rating.css'

// const Star = styled.img` {
//   aspect-ratio : 1 / 1;
//   width: 15px;
//   padding: 0 5px 0 0;
//   @media screen and (min-width: 991px) {
//         transform: scale(2) translateX(10px);
//         padding: 0 10px 0 10px;
//     }
//   } 
// `
// const FullStar = styled.img` {
//   aspect-ratio : 1 / 1;
//   width: 15px;
//   padding: 0 5px 0 0;
// //   margin-right: 4px;
// //   margin-top: 9px;
//   @media screen and (min-width: 991px) {
//         transform: scale(2) translateX(10px);
//         padding: 0 10px 0 10px;
//         // margin-right: 24px;
//         // margin-top: 3px;
//     }
//   } 
// `

function Rating({ starZ }) {
    let arrayRating = ['empty', 'empty', 'empty', 'empty', 'empty'];
    for (let i = 0; i < starZ; i++) {
        arrayRating[i] = 'full';
    }
    return (
        <div>
            {
                arrayRating.map((el, index) => {
                    return el === 'empty' ? (
                        <img className="Star"
                            src={Stars}
                            alt=""
                            key={`${el}-${index}`}
                        />
                    ) : (
                        <img className="fullStar"
                            src={RedStars}
                            alt=""
                            key={`${el}-${index}`}
                        />
                    );
                })
            }
        </div>
    );
}

export default Rating;