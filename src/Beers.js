import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { NavLink } from "react-router-dom"

function Beers() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        async function getBeers() {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
            setBeers(response.data);
        }
        console.log("set state")
        getBeers();
    }, [])

    console.log("render", beers.length);
    return (
    <ul>
        <Header/>
        <h3>Our Beer Selection</h3>
        {beers.length > 0 ? (
            beers.map((beer, index) => {
                return (
                    <>
                        <img 
                        style={{ maxWidth: '150px'}}
                        src={beer.image_url} 
                        alt="beer bottle"/>
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <h4>Created by: {beer.contributed_by}</h4>
                        <li key={index}>
                            <NavLink to={`/beers/${beer._id}`}>
                            More info about {beer.name}
                            </NavLink>
                        </li>
                    </>
                );
            })
        ) : (
            <p>Loading...</p>
        )}
    </ul>
    )
}

export default Beers;