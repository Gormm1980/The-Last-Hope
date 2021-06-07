import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/index.js";

function Planet(props) {
    const params = useParams()
    const { store, actions } = useContext(Context);

    let planet = store.planets[params.index] 
    // store.people te lleva a los personajes
     // [params.index] te da la posicion del personaje selccionado en la card que has pinchado
    

    return (
        <div>
            <div className="jumbotron-fluid mx-5 my-5 d-flex flex-row">
                <div className="left-side d-inline-block">
                    <img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png">
                    </img>
                </div>
                <div className="right-side d-inline-block">
                    <h1 className="text-center text-monospace">{planet.name}</h1>
                    <h6 className="description mx-5 text-center text-monospace"> Lucas ipsum dolor sit amet maul grievous mustafar wampa organa yavin organa fett antilles tatooine. Biggs amidala kenobi antilles moff yavin solo darth greedo. Wookiee wicket darth jinn c-3p0. Bespin jinn k-3po coruscant darth baba calamari ahsoka. Vader yoda kamino moff lobot r2-d2 organa skywalker baba. Gonk c-3po yavin moff moff skywalker. Jinn darth binks hutt coruscant dantooine moff binks. Moff darth darth dantooine tatooine moff skywalker. Skywalker calrissian organa moff. Mothma mace chewbacca maul skywalker anakin thrawn ahsoka antilles.</h6>
                </div>  
            </div>
            <div className="divider bg-danger"></div>
            <div className="row d-flex ml-5">
                <div className= "col-2 text-danger">Name: {planet.name}</div>
                <div className= "col-2 text-danger">Climate: {planet.climate}</div>
                <div className= "col-2 text-danger">Population: {planet.population}</div>
                <div className= "col-2 text-danger">Orbital Period: {planet.orbital_period}</div>
                <div className= "col-2 text-danger">Rotation Period: {planet.rotation_period}</div>
                <div className= "col-2 text-danger">Diameter: {planet.diameter}</div>
            </div>
        </div>
    )
}
export default Planet;