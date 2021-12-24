import { React } from "react"
import { Link } from 'react-router-dom'
import './albums.css'

const NavbarJeidi = () => {

    return (

        <nav className="nav-bar">
            <p className="jeidimel">JEIDI MEL</p>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#concerts">Conciertos</a></li>
                <li><a href="#contact">Contacto</a></li>

            </ul>

        </nav>


    )
}

export default NavbarJeidi
