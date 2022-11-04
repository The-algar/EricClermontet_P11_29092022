import Stars from '../../assets/icon/star.svg';
import RedStars from '../../assets/icon/fullStar.svg';
import './Rating.css'

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