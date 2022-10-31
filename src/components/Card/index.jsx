import './card.css'

function Card({imgCardUrl, title}){
    return(
        <article>
            <p>{title}</p>
            <img src={imgCardUrl} alt={title} />
        </article>
    )
    }

export default Card