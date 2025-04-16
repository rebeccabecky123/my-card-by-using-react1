import React from "react";

export default function Greet(props){
    return(
        <div className="font-bold text-blue-900">
        <p> My name is {props.name}</p>
        <p>my address is {props.address}</p>
        </div>
    );
}