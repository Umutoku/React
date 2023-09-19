import React from 'react';
import './Hemisphere.css';
import northernPic from './image/n.jpg'
import southernPic from './image/download.jpg'

const hemisphereConfig = {
    Northern:{
        text: 'it is northern hemisphere',
        picture: northernPic
    },
    Southern:{
        text: 'it is southern hemisphere',
        picture: southernPic
    }
}

const HemisphereDisplay = ({latitude}) =>{
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const{text,picture} = hemisphereConfig[hemisphere]
    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                <img src={picture} alt="hemisphere"/>
                </div>
                <div className='ui teal bottom attached label'>
                   <h5> {latitude} hey you are in {text}!</h5>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay