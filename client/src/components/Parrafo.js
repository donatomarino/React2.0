import React from "react";

const Parrafo = ({ title, description, }) => {
    
    return (
        <div className="card-bodier">
            <p>{title}</p>
            <p>{description}</p>
            <hr></hr>
            <input type="button" value="Borrar Tarea" name="delete" id="4lgt6a8dIJJavMuhgbvY"></input>
        </div>
    )
}

export default Parrafo;