import React from 'react';
import classes from "./Card.module.css"
const Card=(props)=>{
    return(
        <div className={`${classes.card} ${props.class} ${props.background}`}> 
            {props.children}
        </div>
    )
}

export default Card;