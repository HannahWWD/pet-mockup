import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import avatarphoto from '../assets/avatarphoto.jpg';
import './Navbar.scss';

export default function Navbar() {



    return (
        <div className="navbar">
        <div className="navbar-left">
            <h2>FLUFFY</h2>
            <ul>
                <li>Home</li>
                <li>Resources</li>
                <li>About</li>
                <li>Ways to give</li>
            </ul>
        </div>

        <div className="navbar-right">
            <Avatar alt="avatar" src={avatarphoto} />
            <button className="button-fill button-nav">Adopt</button>
            <button className="button-contour button-nav">Compare</button>

        </div>
        
        

            
        </div>
    )
}
