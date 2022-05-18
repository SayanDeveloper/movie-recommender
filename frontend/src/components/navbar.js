import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    var navigate = useNavigate();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        navigate(`/search/${searchQuery.replaceAll(" ", "")}`);
    }

    return (
        <nav>
            <Link to={"/"} className='logo'>
                Movie-Recommender
            </Link>
            <div className='search-bar'>
                <form onSubmit={formSubmitHandler}>
                    <input 
                        type={"text"} 
                        placeholder={"Search a movie..."}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} 
                        required={true} />
                    <button><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar