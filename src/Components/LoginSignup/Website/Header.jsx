import React from 'react';
import profileImg from '../Website/Profile.jpg'

export default function Header(){
    return(
        <div className='background-container'>
        <header id="main-header">
            <div id="title">
                <button><img src={profileImg} alt='Profile Image'/></button>
                <h1>PetMatch</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
        </div>
    );
}
