import React from "react";

export default function CustomButton (props){

    return (
      <button className={props.class} onClick={props.onPress}>
        {<div className={props.class + "-text"}>{props.name}</div>}
      </button>
    );
  
} 