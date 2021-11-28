import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getCharactersByName, filterCharacters, getCharacters } from '../../actions';

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

    function handleReload(e){
        e.preventDefault();
        dispatch(getCharacters(1))
        setPage(1)
        setStatus("")
        setName("")
        setGender("")
    }


    return (
        <div>
            <div>
                <button onClick={(e) => handleReload(e)}>Reload Characters</button>
            </div>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Example: Rick Sanchez"
                    onChange={(e) => handleInputChangeName(e)}
                />
                <button onClick={(e) => handleSearchName(e)}>Search</button>
            </div>
            <div>
                <select onChange={e => handleChStatus(e)}>
                    <option value=''>All</option>
                    <option value='alive'>Alive</option>
                    <option value='dead'>Dead</option>
                    <option value='unknown'>Unknown</option>
                </select>
            </div>
            <div>
                <select onChange={e => handleChGender(e)}>
                    <option value=''>All</option>
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                    <option value='genderless'>Genderless</option>
                    <option value='unknown'>Unknown</option>
                </select>
            </div>
            {characters ? characters.results?.map(el => {
                return (
                    <div key={el.id}>
                        <p >Name {el.name}</p>
                        <p >Status {el.status}</p>
                        <p >Species {el.species}</p>
                        <p >Gender {el.gender}</p>
                    </div>
                )
            }) : <></>
            }
            <Link to="/">
                Back to home
            </Link>
            <span>Page N° {page}</span>
            <button onClick={e => { handlePrevPage(e) }}>
                Previous Page
            </button>
            <button onClick={e => { handleNextPage(e) }}>
                Next Page
            </button>
        </div>
    )
}