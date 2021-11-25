import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getEpisodes } from '../../actions';

export default function Characters() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(getEpisodes(page))
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


    return (
        <div>
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