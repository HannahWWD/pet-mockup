import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import avatarphoto from '../assets/avatarphoto.jpg';
import ListIcon from '@material-ui/icons/List';
import './Navbar.scss';

export default function Navbar() {

    const [menuIsShown, setMenuIsShown] = useState(false)
    console.log(menuIsShown)

    return (
        <div className="navbar">
        <div className="navbar-left">
            <h2>FLUFFY</h2>
            <div className="navbar-menu">
                <div className="toggle-menu" onClick={()=>{setMenuIsShown(!menuIsShown)}}>
                    <ListIcon fontSize="large"/>
                </div>
                <ul className={menuIsShown?"list-visible":"list-hidden"}>
                    <li>Home</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Ways to give</li>
                    <li className="visible-sm">Adopt</li>
                    <li className="visible-sm">Compare</li>
                    <li className="visible-sm">Account</li>
                </ul>
                </div>
        </div>

        <div className="navbar-right">
            <Avatar alt="avatar" src={avatarphoto} />
            <button className="button-fill button-nav">Adopt</button>
            <button className="button-contour button-nav">Compare</button>

        </div>
        
        

            
        </div>
    )
}
