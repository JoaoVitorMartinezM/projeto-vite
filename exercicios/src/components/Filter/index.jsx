import "./Filter.css"
import { useState } from "react"
import { lista } from "../../lista";
import ListCourses from "../ListCourses";


const Filter = (props) => {

    const [search, setSearch] = useState('');
    const [list, setList] = useState(lista);
    

    const handleOnchange = (event) =>{
        setSearch(event.target.value)
        
    }

    const handleOnClick = (event) => {
        const regex = new RegExp(`${search}`, 'gi')
        const listaFiltered = lista.filter((element) => element.name.match(regex))
        setList(listaFiltered)
        console.log(list)

        
    }

    return(
        <div> 
            <div id="searchArea">
                <input className="search" type="text" onChange={handleOnchange} />
                <button id="buttonSearch" onClick={handleOnClick}>Search</button>
                
            </div>
            
            <ListCourses list={list}/>
            

        </div>

    )
}

export default Filter