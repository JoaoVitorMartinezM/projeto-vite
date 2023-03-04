import "./Card.css"

const Card = ({name, category, description, duration, ImageUrl= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"}) => {
    return(
        <div className="Card">
            <div>
                <img src={ImageUrl} alt="icon"/>
                <span>{name}</span>
            </div>            
            <span>{duration}</span>
            <p>{description}</p>
            <button hidden>Details</button>

        </div>
    )
}

export default Card;