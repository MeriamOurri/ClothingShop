import React from "react";
import './custom-button.styles.scss';


export const CustomButton = ({children , ...otherProps})=>
{
    return(
        <button { ...otherProps }>{ children } </button>
    );
}