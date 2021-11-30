import React from 'react';
import '../../scss/LCards.scss'
export default function LCard({ name, type, dimension }) {
    return (
        <div className="cardContainer">
            <div className="section">
                <span className="title">Name : </span>
                <span className="sub-title">{name}</span>
            </div>
            <div className="section">
                <span className="title">Dimension : </span>
                <span className="sub-title">{dimension}</span>
            </div>
            <div className="section">
                <span className="title">Type : </span>
                <span className="sub-title">{type}</span>
            </div>
        </div>
    )
}