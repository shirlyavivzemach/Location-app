import React, { useEffect } from 'react';
import Iframe from 'react-iframe'



export function UserLocation(props) {

    const { location } = props

    function setSrc() {
        if (!location) return;
        const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=${location.longitude},${location.latitude}`
        return src
    }

    function renderUserLocation() {
        if (!location) return;
        let city = location.city
        let country = location.country_name
        return (
            <div>
                <h3>Hi User! You're at {city}, {country} have fun!</h3>
            </div>
        );
    }
    
    const src = setSrc()
    return (
        <div className="location-box">
            <h3 >{renderUserLocation()}</h3>
            <Iframe className="map-container"
                width="800"
                height="550"
                frameborder="0" style="border:0"
                src={src} allowfullscreen>

            </Iframe>

        </div>
    );
}
