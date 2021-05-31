import React from "react";
import { Link } from "react-router-dom";
import  Favorite  from "./favorite.js"

export default function(props) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container d-flex justify-content-between">
                    <span className="navbar-brand">
                    <Link to="/">
                        <img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy">
                    </img>
                    </Link>
                    
                    </span>

                    <Favorite />
                </div>
            
        </nav>
    )
}