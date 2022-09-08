import React from "react";

export default function CustomInput (props){

    return (
      <input 
        placeholder={props.label} 
        className={props.class} 
        value={props.value} 
        onChange={props.setValue} />
        
    );
  
} 
