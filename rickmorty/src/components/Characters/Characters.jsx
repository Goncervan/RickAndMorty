import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getCharacters, filterCharacters } from '../../actions';

export default function Characters() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState("")
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
        console.log(gender,page,)
    }
    return (
        <div>
            <select onChange={e => handleChStatus(e)}>
                <option value=''>All</option>
                <option value='alive'>Alive</option>
                <option value='dead'>Dead</option>
                <option value='unknown'>Unknown</option>
            </select>
            <select onChange={e => handleChGender(e)}>
                <option value=''>All</option>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
                <option value='genderless'>Genderless</option>
                <option value='unknown'>Unknown</option>
            </select>
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
                // characters?.map(el => {
                //     return (
                //         <div key={el.id}>
                //             <p >Name {el.name}</p>
                //             <p >Status {el.status}</p>
                //             <p >Species {el.species}</p>
                //         </div>
                //     )
                // })
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