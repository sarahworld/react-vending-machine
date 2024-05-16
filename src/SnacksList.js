import React, {useState} from "react";
import { Link } from "react-router-dom";
import './SnackList.css'

const SnacksList = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/Soda'>Soda </Link></li>
                    <li><Link to='/Chips'>Chips </Link></li>
                    <li><Link to='/Sardines'>Fresh-Sardines </Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default SnacksList;