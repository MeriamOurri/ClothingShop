import React from "react";
import './menu-item.scss';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const MenuItem = ({title, imageUrl, size, linkUrl})=>{
    const location = useLocation();
    let navigate = useNavigate();

    return (
        <div className="menu-item" style={{backgroundImage:`url(${imageUrl})`, height:{size}}} onClick={()=>navigate(`${location.pathname}${linkUrl}`,{ replace: true })}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}
export default MenuItem;