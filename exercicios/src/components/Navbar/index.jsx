import React from "react";
import "./Navbar.css";

const Navbar = (props)  => {
    return(
        <div className="navbar">
            <div>
                <img id="icone-logo" src="src\assets\logo.png" alt="icone" />
                <h1 id="titulo">React Cursos</h1>
            </div>


            <div>
                <img id="icone-user" src="src\assets\personIcon.png" alt="icone" />


            </div>

        </div>
        

    );
}

export default Navbar;