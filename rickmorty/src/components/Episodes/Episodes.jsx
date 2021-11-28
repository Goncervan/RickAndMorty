import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getEpisodes, getEpisodeByNumber, getEpisodeByName } from '../../actions';

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
        <div>
            <div>
                <span>Search By Number</span>
                <input
                    type="number"
                    placeholder="Example: 1"
                    onChange={(e) => handleInputChangeNumber(e)}
                />
            </div>
            <div>
                <span>Search By Name</span>
                <input
                    type="text"
                    placeholder="Example: Pilot"
                    onChange={(e) => handleInputChangeName(e)}
                />
                <button onClick={(e) => handleSearch(e)}>
                    Search
                </button>
            </div>
            <div>
                <button onClick={(e) => handleReload(e)}>
                    Reload episodes
                </button>
            </div>
            {episodes ? episodes.results?.map(el => {
                return (
                    <div key={el.id}>
                        <p >Name {el.name}</p>
                        <p >Episode {el.episode}</p>
                        <p >Date {el.air_date}</p>
                    </div>
                )
            }) :
                <></>}
            {number > 0 ? (
                <div>
                    <p>{episodes.name}</p>
                    <p>{episodes.air_date}</p>
                    <p>{episodes.episode}</p>
                </div>
            ) :
                <></>
            }
            <div>
                <Link to="/">
                    Back to home
                </Link>
            </div>
            <div>
                <span>Page N° {page}</span>
                <div>
                    <button onClick={e => { handlePrevPage(e) }}>
                        Previous Page
                    </button>
                    <button onClick={e => { handleNextPage(e) }}>
                        Next Page
                    </button>
                </div>
            </div>
        </div>
    )
}