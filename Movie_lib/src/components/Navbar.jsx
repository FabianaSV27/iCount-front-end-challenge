import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

import './Navbar.css'

const Navbar = () =>{

    const [search, setsearch] = useState("");
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault()
        

        if(!search) return

        navigate(`/search?q=${search}`)
        setsearch("")
    }

    return(
        <nav id="navbar">
            <h2>
                <Link to="/"><BiCameraMovie />Movie lib</Link>
            </h2>
            <form className="search" onSubmit={handlesubmit}>
                <input type="text" className="input" placeholder="Busque um filme" 
                onChange={(e) => setsearch(e.target.value)}
                vaule={search}
                />
                <button type="submit" className="button">
                    <BiSearchAlt2 />   
                </button>
            </form>
        </nav>
    )
}

export default Navbar