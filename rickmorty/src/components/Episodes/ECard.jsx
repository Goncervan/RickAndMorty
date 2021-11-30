import React from 'react';
import '../../scss/LCards.scss'
export default function ECard({ name, episode, air_date }) {
    return (
        <div className="cardContainer">
            <div className="section">
                <span className="title">Name : </span>
                <span className="sub-title">{name}</span>
            </div>
            <div className="section">
                <span className="title">Episode : </span>
                <span className="sub-title">{episode}</span>
            </div>
            <div className="section">
                <span className="title">Air date : </span>
                <span className="sub-title">{air_date}</span>
            </div>
        </div>
    )
}