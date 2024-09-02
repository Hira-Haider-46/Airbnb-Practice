import React from 'react';
import image from './images-group.png';
import './Header.css'

function Header() {
    return (
        <>
            <div className='img-box'>
                <img src={image} />
            </div>
            <div className='heading'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </>
    );
}

export default Header;