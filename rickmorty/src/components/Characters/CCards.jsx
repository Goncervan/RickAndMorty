import React from 'react';
import '../../scss/CCards.scss'
export default function CCard({ name, status, species, gender, image }) {
    return (
        <div className="cardCon">
            <div className="sections">
                <span className="titles">Name : </span>
                <span className="sub-titles">{name}</span>
            </div>
            <div className="sections">
                <span className="titles">Status : </span>
                <span className="sub-titles">{status}</span>
            </div>
            <div className="sections">
                <span className="titles">Specie : </span>
                <span className="sub-titles">{species}</span>
            </div>
            <div className="sections">
                <span className="titles">Gender : </span>
                <span className="sub-titles">{gender}</span>
            </div>
            <div className="sections">
                <img className="img" alt="img" src={image}/>
            </div>
        </div>
    )
}