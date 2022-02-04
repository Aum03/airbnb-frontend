import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { getCenter } from 'geolib';

function Map({searchResult}) {
    
    const coordinates=searchResult.map((result)=>(
        {
            longitude:result.long,
            latitude:result.lat
        }
    ));

    const center=getCenter(coordinates);
    const[viewport,setViewport]=useState({
        width:"100%",
        height:"100%",
        longitude: center.longitude,
      latitude: center.latitude,
      zoom: 11
    });
    return (
       <ReactMapGL
       mapStyle='mapbox://styles/aum03/ckz1fw444003d14pkw2xqaguo'
       mapboxApiAccessToken={process.env.mapbox_key}
       {...viewport}
       onViewportChange={(nextViewport)=>setViewport(nextViewport)}
    ></ReactMapGL>
    );
}

export default Map;
