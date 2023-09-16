import React from 'react';
import northernPic from './image/n.jpg'
import southernPic from './image/download.jpg'

const HemisphereDisplay = ({latitude}) =>{
    const hemisphere = latitude > 0 ? 'Northern hemisphere' : 'Southern hemisphere';
    const picture = latitude > 0? northernPic : southernPic
    return(
        <div>{latitude} hey you are in {hemisphere}! <img src={picture} alt="hemisphere"/></div>
    )
}

export default HemisphereDisplay