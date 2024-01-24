import React from "react"
import location_logo from "../src/assets/location-logo.png"

function Location(props) {
    return (
       <div className="location-card">
            <img className="location-image" src={props.imageUrl} alt="image of the place" />
            <div className="card-content">
                <img className="location-logo" src={location_logo} alt="location logo" />
                <span className="location">{props.location}</span>
                <a className="location-url" href={props.googleMapsUrl}>View on Google Maps</a>
                <h1 className="location-title">{props.title}</h1>
                <span className="location-date">{props.startDate} - {props.endDate}</span>
                <p className="location-description">{props.description}</p>
            </div>
       </div>
    )
}

export default Location