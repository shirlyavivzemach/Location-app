import React, {useEffect, useState, useCallback} from 'react';
import {getLocation} from '../service/locationService';
import {UserLocation} from '../cmps/UserLocation';
import {Nav} from '../cmps/Nav';

function LocationApp() {

  const [location, setLocation] = useState(null)

  useEffect(() => {
   
   mapLocation()

  }, [])

 

// call the fanction from the service and update the location
  const mapLocation=useCallback (async()=>{
    const userLocation=await getLocation()
    setLocation(userLocation)
   
  });

  return (
    <div >
      <Nav/>
      <UserLocation location={location}/>
    </div>
  
  );
}

export default LocationApp;
