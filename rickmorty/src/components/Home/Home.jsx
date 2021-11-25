import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <img alt="Logo" src="http://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" />
            <br></br>
            <Link to="/locations">
                Locations
            </Link>
            <br></br>
            <br></br>
            <Link to="/characters">
                Characters
            </Link>
            <br></br>
            <br></br>
            <Link to="/episodes">
                Episodes
            </Link>
        </div>
    )
}