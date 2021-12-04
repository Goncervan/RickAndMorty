import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getLocations, getLocationsByDimension, getLocationsByName } from '../../actions';
import LCard from './LCards';
import '../../scss/Locations.scss'


export default function Locations() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const [name, setName] = useState("")
    const [dimension, setDimension] = useState("")

    useEffect(() => {
        dispatch(getLocations(page))
    }, [])

    const locations = useSelector((state) => state.allLocations);

    function handleNextPage(e) {
        e.preventDefault();
        console.log(dimension)
        if (locations.info.next) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setPage(page + 1)
            if (dimension.length > 0) {
                dispatch(getLocationsByDimension(dimension, page + 1))
            } else if (name.length > 0) {
                dispatch(getLocationsByName(name, page + 1))
            } else {
                dispatch(getLocations(page + 1))
            }
        } else {
            alert("last page!")
        }
    }

    function handlePrevPage(e) {
        e.preventDefault();
        console.log(dimension)
        if (!locations.info.prev) {
            alert("First page!")
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            if (dimension.length > 0) {
                console.log("dime")
                dispatch(getLocationsByDimension(dimension, page - 1))
            } else if (name.length > 0) {
                console.log("Name")
                dispatch(getLocationsByName(name, page - 1))
            } else {
                console.log("None")
                dispatch(getLocations(page - 1))
            }
        }
    }

    function handleInputChangeName(e) {
        e.preventDefault();
        setName(e.target.value);
    }
    function handleSearchName(e) {
        e.preventDefault();
        let regEx = new RegExp(' ', 'g');
        let newName = name.replace(regEx, '&');
        dispatch(getLocationsByName(newName));
        setName(newName)
        setDimension("");
        setPage(1);
    }
    function handleInputChangeDimension(e) {
        e.preventDefault();
        setDimension(e.target.value);
    }
    function handleSearchDimension(e) {
        e.preventDefault();
        let regEx = new RegExp(' ', 'g');
        let newDimension = dimension.replace(regEx, '&');
        dispatch(getLocationsByDimension(page, newDimension));
        setDimension(newDimension)
        setName("");
        setPage(1);
    }

    function handleReload(e) {
        e.preventDefault();
        setName("");
        setDimension("");
        setPage(1)
        dispatch(getLocations(1))
    }

    return (
        <div className="con">
            <div className="navbar">
                <div className="inputContainer">
                    <label className="label">Name</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Example: Abadango"
                        onChange={(e) => handleInputChangeName(e)}
                    />
                    <button
                        className="btn-Search"
                        onClick={(e) => handleSearchName(e)}>Search</button>
                </div>
                <div className="inputContainer">
                    <button
                        className="btn-reload"
                        onClick={(e) => handleReload(e)}>Reload locations</button>
                </div>
                <div className="inputContainer">
                    <label className="label">Dimension</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Example: Unknown"
                        onChange={(e) => handleInputChangeDimension(e)}
                    />
                    <button
                        className="btn-Search"
                        onClick={(e) => handleSearchDimension(e)}>Search</button>
                </div>
            </div>
            <div className="cardsContainer">
                {locations ? locations.results?.map(el => {
                    return (
                        <div className="card" key={el.id}>
                            <LCard name={el.name} type={el.type} dimension={el.dimension} />
                        </div>
                    )
                }) :
                    <></>}
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