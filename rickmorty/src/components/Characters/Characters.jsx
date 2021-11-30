import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getCharactersByName, filterCharacters, getCharacters } from '../../actions';
import '../../scss/Locations.scss'
import CCard from './CCards';


export default function Characters() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState("")
    const [name, setName] = useState("")
    useEffect(() => {
        // dispatch(getCharacters(page))
        dispatch(filterCharacters(status, page, gender));
    }, [page])
    const characters = useSelector((state) => state.allCharacters);
    function handleNextPage(e) {
        e.preventDefault();
        if (page < characters.info.pages) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setPage(page + 1);
        } else {
            alert("last page!")
        }
    }

    function handlePrevPage(e) {
        e.preventDefault();
        if (page === 1) {
            alert("First page!")
        } else {
            setPage(page - 1);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }
    function handleChStatus(e) {
        e.preventDefault();
        setStatus(e.target.value);
        dispatch(filterCharacters(e.target.value, page, gender));
        setPage(1);
    }
    function handleChGender(e) {
        e.preventDefault();
        setGender(e.target.value);
        dispatch(filterCharacters(status, page, e.target.value));
        setPage(1);
    }

    function handleInputChangeName(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSearchName(e) {
        e.preventDefault();
        let regEx = new RegExp(' ', 'g');
        let newName = name.replace(regEx, '&');
        dispatch(getCharactersByName(newName))
    }

    function handleReload(e) {
        e.preventDefault();
        dispatch(getCharacters(1))
        setPage(1)
        setStatus("")
        setName("")
        setGender("")
    }


    return (
        <div className="con">
            <div className="navbar">
                <div className="inputContainer">
                    <label className="label">Name</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Example: Rick Sanchez"
                        onChange={(e) => handleInputChangeName(e)}
                    />
                    <button
                        className="btn-Search"
                        onClick={(e) => handleSearchName(e)}>Search</button>
                </div>
                <div className="inputContainer">
                    <label className="label">Status</label>
                    <select className="select" onChange={e => handleChStatus(e)}>
                        <option value=''>All</option>
                        <option value='alive'>Alive</option>
                        <option value='dead'>Dead</option>
                        <option value='unknown'>Unknown</option>
                    </select>
                </div>
                <div className="inputContainer">
                    <label className="label">Genre</label>
                    <select className="select" onChange={e => handleChGender(e)}>
                        <option value=''>All</option>
                        <option value='female'>Female</option>
                        <option value='male'>Male</option>
                        <option value='genderless'>Genderless</option>
                        <option value='unknown'>Unknown</option>
                    </select>
                </div>
                <div className="inputContainer">
                    <button
                        className="btn-reload"
                        onClick={(e) => handleReload(e)}>Reload Characters</button>
                </div>
            </div>
            <div className="charactersContainer">
                {characters ? characters.results?.map(el => {
                    return (
                        <div className="characters" key={el.id}>
                            {/* <p >Name {el.name}</p>
                            <p >Status {el.status}</p>
                            <p >Species {el.species}</p>
                            <p >Gender {el.gender}</p>
                            <img alt="Img" src={el.image}/> */}
                        <CCard 
                        name={el.name} 
                        status={el.status} 
                        species={el.species}
                        gender={el.gender}
                        image={el.image}
                        />
                        
                        </div>
                    )
                }) : <></>
                }
            </div>
            <div className="footer">
                <div className="footerContainer">
                    <button
                        className="btn-page"
                        onClick={e => { handlePrevPage(e) }}>
                        Previous Page
                    </button>
                    <Link className="btnBack" to="/">
                        Back to home
                    </Link>
                    <button
                        className="btn-page"
                        onClick={e => { handleNextPage(e) }}>
                        Next Page
                    </button>
                </div>
            </div>
        </div>
    )
}