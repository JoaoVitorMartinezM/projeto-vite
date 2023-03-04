import "./ListCourses.css"
import Card from "../Card"


const ListCourses = ({list}) => {
    return(
        <ul className="container">
            
            {list.map((element, index) => {
                return(
                    <li key={index}>
                    <Card name={element.name}
                    category={element.category}
                    duration={element.duration}
                    ImageUrl={element.ImageUrl}
                    description={element.description}
                    />
                </li>
                )
            })}
            
        </ul>
    )
}

export default ListCourses;