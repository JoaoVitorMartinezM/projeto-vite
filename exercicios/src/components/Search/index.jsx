import "./Search.css";
import list from "../../ListCards";
import ListCourses from "../ListCourses";
import { useState } from "react";

const AreaSearch = () => {

    const [search, setSearch] = useState("");

    const eventListener = (event) => {
        event.preventDefault();
        toSearch('Tes');
    }



    function toSearch(search){
        const regex = new RegExp(`${search}`, 'gi')
        const listFiltered = list.filter(element => element.name.match(regex))
        console.log(listFiltered)

        return(
            <>
                <ListCourses list={listFiltered}/>
            </>
        )
        

    }
    return(
        <div className="search">
            <div>
                <label htmlFor="searched">Search</label>
                <input id="searched" type="text" value={search}  placeholder="Search a course"/>
            </div>
            <button onClick={eventListener}>Search</button>

        </div>
    )
}

export default AreaSearch;