import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/index.js";

export default function(props) {

    const { store, actions } = useContext(Context);
    

    useEffect(()=> {
        actions.getFavorites();
        console.log('store.favorites desde favorites.js: ', store.favorites)
    },[store.favorites])
    // renderiza solo cuando cambie store.favorites. Si el array está vacío se dice que no tiene dependencias

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Favorites
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
            {actions.getFavorites().map( (fav, index) =>  { 
                return (
                    <a className="dropdown-item" key={index} href="#">{fav}
                        <button onClick={() => actions.deleteFavorites(fav)} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </a>
                )
            })
            }     
            </div>
        </div>
    )  
}


