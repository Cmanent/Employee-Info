import React from "react";
import "../App.css";



function Employee(props) {
    return (

        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td><img src={props.image} alt={props.name}></img></td>
            <td>{props.occupation}</td>

        </tr>

    );
}

export default Employee;