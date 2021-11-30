import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getEpisodes, getEpisodeByNumber, getEpisodeByName } from '../../actions';
import '../../scss/Locations.scss'
import ECard from './ECard';


export default function Characters() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const [number, setNumber] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        dispatch(getEpisodes(page, number))
    }, [page])

    const episodes = useSelector((state) => state.allEpisodes);

    function handleNextPage(e) {
        e.preventDefault();
        if (page < episodes.info.pages) {
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

    function handleInputChangeNumber(e) {
        e.preventDefault();
        setNumber(e.target.value);
        if (e.target.value < 52) {
            dispatch(getEpisodeByNumber(e.target.value));
        } else {
            alert("Invalid Number")
        }
    }
    function handleInputChangeName(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSearch(e) {
        e.preventDefault();
        dispatch(getEpisodeByName(name))
    }

    function handleReload(e) {
        e.preventDefault();
        dispatch(getEpisodes());
        setPage(1)
        setName("")
    }
    return (
        <div className="con">
            <div className="navbar">
                <div className="inputContainer">
                    <label className="label">Number</label>
                    <input
                        className="input"
                        type="number"
                        placeholder="Example: 1"
                        onChange={(e) => handleInputChangeNumber(e)}
                    />
                </div>
                <div className="inputContainer">
                    <button
                        className="btn-reload"
                        onClick={(e) => handleReload(e)}>
                        Reload episodes
                    </button>
                </div>
                <div className="inputContainer">
                    <label className="label">Name</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Example: Pilot"
                        onChange={(e) => handleInputChangeName(e)}
                    />
                    <button
                        className="btn-Search"
                        onClick={(e) => handleSearch(e)}>
                        Search
                    </button>
                </div>
            </div>
            <div className="cardsContainer">
                {episodes ? episodes.results?.map(el => {
                    return (
                        <div className="card" key={el.id}>
                            <ECard name={el.name} episode={el.episode} air_date={el.air_date}/>
                        </div>
                    )
                }) :
                    <></>}
                {number > 0 ? (
                    <div className="card" key={episodes.id}>
                        {/* <p>{episodes.name}</p>
                        <p>{episodes.air_date}</p>
                        <p>{episodes.episode}</p> */}
                        <ECard name={episodes.name} episode={episodes.episode} air_date={episodes.air_date}/>
                    </div>
                ) :
                    <></>
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