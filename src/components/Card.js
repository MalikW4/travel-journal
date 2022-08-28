import React from "react"


export default function Card(props) {
    return (
        <div className="card">
            <div className="card--image--div">
                <img className= "card--image"
                    id="card--image"
                    src={`../images/${props.image}`}
                    alt={props.title}
                />
            </div>
        
            <div className="card--stats">
                <img src="../images/location-pin.png" className="card--loc-pin" alt=""/>
                <h2 className="card--location">{props.location}</h2>
                <a className="card--gmaps" href={props.googleMapsUrl} target="_blank" 
                rel="noopener noreferrer"
                >View On Google Maps</a>
                <h3 className="card--title">{props.title}</h3>
                <p className="card--description">{props.description}</p>
            </div>                
        </div>
    );
}
