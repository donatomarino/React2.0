import Input from "./Input";
import TextArea from "./TextArea";
import Br from "./Br";
import Boton from "./Boton";
import React from "react";

const BodyForm = ({ tag, id, idDos, placeholder, placeholderDos, placeholderTres, value }) => {
    switch (tag) {
        case 'add-tarea':
            return (
                <div className="card-body">
                    <Input id={id} placeholder={placeholder} />
                    <Br />
                    <TextArea placeholder={placeholderDos} />
                    <Br />
                    <Boton value={value} />
                </div>
            )
        case 'update-tarea':
            return (
                <div className="card-body">
                    <Input id={id} placeholder={placeholder} />
                    <Input id={idDos} placeholder={placeholderDos} />
                    <Br />
                    <TextArea placeholder={placeholderTres} />
                    <Br />
                    <Boton value = {value} />
                </div>
            )
    }
}

export default BodyForm