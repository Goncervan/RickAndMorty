import React from 'react'
import { Link } from 'react-router-dom';
import '../../scss/Home.scss';

export default function Home() {
    return (
        <div className="home">
            <div className="image">
                {/* <img alt="Logo" src="http://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" /> */}
                <img alt="Logo" src="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABddiw4GEUq76B3fmiI7r6NF-GrWeEf99MjwKrfixFKM4B4o1uuitcgbuBNa3n04L5GSamUi2vex4adduBV-S2XGERxn29-ffvoRv.png?r=a6e" />
            </div>
            <h1 className="title">¡Discover one of the most interesting series today!</h1>
            <div className="buttons">
                <div className="containerBtn">
                    <h4 className="subtitle">Locations </h4>
                    <Link to="/locations" className="locations">
                        <img className="portal" alt="portal" src="https://i.pinimg.com/originals/6b/81/a1/6b81a1049b32cfa0fe2038fbc0a6d097.png" />
                    </Link>
                </div>
                <div className="containerBtn">
                    <h4 className="subtitle"> Characters </h4>
                    <Link to="/characters" className="characters">
                        <img className="portal" alt="portal" src="https://i.pinimg.com/originals/6b/81/a1/6b81a1049b32cfa0fe2038fbc0a6d097.png" />
                    </Link>
                </div>
                <div className="containerBtn">
                    <h4 className="subtitle"> Episodes </h4>
                    <Link to="/episodes" className="episodes">
                        <img className="portal" alt="portal" src="https://i.pinimg.com/originals/6b/81/a1/6b81a1049b32cfa0fe2038fbc0a6d097.png" />
                    </Link>
                </div>
            </div>
        </div>
    )
}