import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getCharacters, getCharactersByName, getCharactersByStatus, getCharactersByGender } from '../../actions';
import '../../scss/Locations.scss'
import CCard from './CCards';


export default function Characters() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState("")
    const [name, setName] = useState("")
    useEffect(() => {
        dispatch(getCharacters(page));
    }, [])
    
    
    const characters = useSelector((state) => state.allCharacters);
    
    




    function handleNextPage(e) {
        e.preventDefault();
        if (characters.info.next) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setPage(page + 1);
            if (status.length > 0) {
                dispatch(getCharactersByStatus(status, page + 1))
            } else if (gender.length > 0) {
                dispatch(getCharactersByGender(gender, page + 1))
            } else if (name.length > 0) {
                dispatch(getCharactersByName(name, page + 1))
            } else {
                dispatch(getCharacters(page + 1))
            }
        } else {
            alert("last page!")
        }
    }

    function handlePrevPage(e) {
        e.preventDefault();
        if (!characters.info.prev) {
            alert("First page!")
        } else {
            setPage(page - 1);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            if (status.length > 0) {
                dispatch(getCharactersByStatus(status, page - 1))
            } else if (gender.length > 0) {
                dispatch(getCharactersByGender(gender, page - 1))
            } else if (name.length > 0) {
                dispatch(getCharactersByName(name, page - 1))
            } else {
                dispatch(getCharacters(page - 1))
            }
        }
    }
    function handleChStatus(e) {
        e.preventDefault();
        setStatus(e.target.value);
        dispatch(getCharactersByStatus(e.target.value, 1));
        setPage(1);
        setName("")
        setGender("")
    }
    function handleChGender(e) {
        e.preventDefault();
        setGender(e.target.value);
        dispatch(getCharactersByGender(e.target.value, page));
        setPage(1);
        setStatus("")
        setName("")
    }

    function handleInputChangeName(e) {
        e.preventDefault();
        setName(e.target.value);
    }



    // Performance Challenge (incompleto)
    
    // const charactersNames = useSelector((state) => state.characters);
    // const [storageArray, setStorageArray] = useState([])
    // const [search, setSearch] = useState(false)


    // function save(array) {
    //     let newArray = array?.results?.map(el => {
    //         const ch = {
    //             name: el.name,
    //             status: el.status,
    //             gender: el.gender,
    //             species: el.species,
    //             image: el.image
    //         }
    //         return ch;
    //     })
    //     localStorage.setItem('characterList', JSON.stringify(newArray));
    //     let itemStorage = localStorage.getItem("characterList");
    //     setStorageArray(JSON.parse(itemStorage));
    //     console.log(storageArray)
    // }
    function handleSearchName(e) {
        e.preventDefault();
        let regEx = new RegExp(' ', 'g');
        let newName = name.replace(regEx, '&');
        dispatch(getCharactersByName(newName));
        setPage(1);
        setStatus("")
        setGender("")
        // setSearch(true);
        // save(charactersNames)
    }


    // function probar(e) {
    //     e.preventDefault();
    //     save(charactersNames);
    //     console.log(storageArray)
    // }

    function handleReload(e) {
        e.preventDefault();
        dispatch(getCharacters(1))
        setPage(1)
        setStatus("")
        setName("")
        setGender("")
    }





    // ----PERFORMANCE CHALLENGE----
    // 1- Cuando busque, debería recorrer el array de resultados
    // 2- Guardar el array en el localStorage haciendole un JSON.stringify("array")
    // 3- Cuando busque de vuelta, deberia recuperar la lista esa con y hacer JSON.parse("arrayDelStorage")
    // 4- Si la lista tiene algo, buscar ahí el personaje por el nombre, y si no existe, ahí hacer la busqueda en la api



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
                        onClick={(e) => handleReload(e)}>Reload Characters
                    </button>
                </div>
            </div>
            <div className="charactersContainer">
                {
                    characters?.results?.map(el => {
                        return (
                            <div className="characters" key={el.id}>
                                <CCard
                                    name={el.name}
                                    status={el.status}
                                    species={el.species}
                                    gender={el.gender}
                                    image={el.image}
                                />
                            </div>
                        )
                    })
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