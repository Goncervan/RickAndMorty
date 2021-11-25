import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getLocations } from '../../actions';

export default function Locations() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
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



    return (
        <div>
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