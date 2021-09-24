import React, { useEffect, useState } from "react";
import Header from "./Header";
import Beers from "./Beers";

function BeerDetails() {
    return (
        <>
        <Header/>
            <img src={beer.image}/>
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </>
    )
}

export default BeerDetails;