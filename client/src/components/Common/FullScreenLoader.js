import React from 'react';
import "./FullScreenLoader.css";
import loader from "../../assets/img/loader.svg"

const FullScreenLoader = () => {
    return (
        <div className="ProcessingDiv">
        <div className="center-screen">
            <img src={loader} alt="loader" className="loader-size" />
        </div>
            
        </div>
    );
};

export default FullScreenLoader;