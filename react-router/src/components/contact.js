import React from 'react';
import {Link} from 'react-router-dom';
import Modal from './Modal';

const Contact = (props) => {
    // setTimeout(()=>{props.history.push('/about')},2000)
    return(
        <div>
            {/* <Modal/> */}
                    <div 
        className='ui raised very padded text container segment'
        style={{marginTop:'80px'}}
        >
            <Link to='/alex'  className='ui header'>Alex</Link>
            <p>Lorem ipsum</p>
        </div>
        <div 
        className='ui raised very padded text container segment'
        style={{marginTop:'80px'}}
        >
            <Link to='/willma' className='ui header'>Willma</Link>
            <p>Lorem ipsum</p>
        </div>
        </div>

    )
}

export default Contact;