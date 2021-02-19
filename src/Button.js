import React from "react";
import "./style.css";


const Button = ({title = "Default"}) => (
        <div>
            <button className='button'>{title}</button>
        </div >
    );

export default Button;