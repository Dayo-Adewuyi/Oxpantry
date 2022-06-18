import React from 'react'
import UAuth from "@uauth/js";
import { Avatar, Button } from "@chakra-ui/react";
import '../../styles/Header.css'
import GDriveLogo from '../../media/google-drive-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useContext,useState,useEffect } from 'react';
import { ConnectContext } from '../../context/ConnectContext';
import polygonLogo from '../../assets/polygonlogo.png'




const Header = () => {
    const {currentAccount, connectWallet } = useContext(ConnectContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [user, setUser] = useState(); 

    
  
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={GDriveLogo} alt="OxPantry" />
                <span className='header__text'>0xPantry</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder='Search Files' />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    
                </span>
                
                <button className='btn'><img alt="Network logo" className="logo" src={polygonLogo} />{currentAccount.slice(0, 6)}...{currentAccount.slice(-4)} </button>
            </div>
        </div>
    )
}

export default Header
