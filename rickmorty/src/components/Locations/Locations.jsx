import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getLocations, getLocationsByDimension, getLocationsByName } from '../../actions';

export default function Locations() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const [name, setName] = useState("")
    const [dimension, setDimension] = useState("")
    useEffect(() => {
        dispatch(getLocations(page))
    }, [page])

    const locations = useSelector((state) => state.allLocations);

    function handleNextPage(e) {
        e.preventDefault();
        if (page < locations.info.pages) {
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

    function handleInputChangeName(e) {
        e.preventDefault();
        setName(e.target.value);
    }
    function handleSearchName(e) {
        e.preventDefault();
        let regEx = new RegExp(' ', 'g');
        let newName = name.replace(regEx, '&');
        dispatch(getLocationsByName(newName))
    }
    function handleInputChangeDimension(e) {
        e.preventDefault();
        setDimension(e.target.value);
    }
    function handleSearchDimension(e) {
        e.preventDefault();
        setName("")
        let regEx = new RegExp(' ', 'g');
        let newDimension = dimension.replace(regEx, '&');
        dispatch(getLocationsByDimension(page,newDimension))
    }

    function handleReload(e){
        e.preventDefault();
        setName("");
        setDimension("");
        setPage(1)
        dispatch(getLocations(1))
    }

    return (
        <div>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Example: Abadango"
                    onChange={(e) => handleInputChangeName(e)}
                />
                <button onClick={(e) => handleSearchName(e)}>Search</button>
            </div>
            <div>
                <label>Dimension</label>
                <input
                    type="text"
                    placeholder="Example: Replacement Dimension"
                    onChange={(e) => handleInputChangeDimension(e)}
                />
                <button onClick={(e) => handleSearchDimension(e)}>Search</button>
            </div>
            <div>
                <button onClick={(e) => handleReload(e)}>Reload locations</button>
            </div>
            {locations ? locations.results?.map(el => {
                return (
                    <div key={el.id}>
                        <p >name {el.name}</p>
                        <p >type {el.type}</p>
                        <p >dimension {el.dimension}</p>
                    </div>
                )
            }) :
                <></>}
            <Link to="/">
                Back to home
            </Link>
            <button onClick={e => { handlePrevPage(e) }}>
                Previous Page
            </button>
            <button onClick={e => { handleNextPage(e) }}>
                Next Page
            </button>
        </div>
    )
}