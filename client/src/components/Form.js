import TitlePagina from "./TitlePagina";
import Br from "./Br";
import HeaderForm from "./HeaderForm";
import BodyForm from "./BodyForm";
import Hdos from "./Hdos";
import Div from "./Div";
import Parrafo from "./Parrafo";

export default function Form() {
    const textAlign = {
        textAlign: 'center'
    }

    return (
        <div className="contenedor">
            <TitlePagina />

            <div className="contenedor-forms">
                <div className="form">
                    <HeaderForm text={"AÑADIR TAREA"} />

                    <BodyForm tag={"add-tarea"} id={"titulo"} placeholder={"Titulo de la tarea"} placeholderDos={"Descriptión de la tarea"} value={"Enviar"} />
                </div>

                <Br />

                <div className="form">
                    <HeaderForm text={"AÑADIR TAREA"} />

                    <BodyForm tag={"update-tarea"} id={"get-titulo"} placeholder={"Introduces ID de la tarea"} idDos={"tituloDos"} placeholderDos={'Nuevo titulo de la tarea'} placeholderTres={"Nueva descripción de la tarea"} value={"Actualizar tarea"} />
                </div>
            </div>

            <div style={textAlign}>
                <Hdos text={"Listado de tareas existente"} />
            </div>

            <div className="contenedor-tareas">
                <div className="contenedor-tarea">
                    <Div id="Id: 4lgt6a8dIJJavMuhgbvY" />

                    <Parrafo title="Title: Hola" description="Description: HolaHola" />
                </div>

                <div className="contenedor-tarea">
                    <Div id="Id: 4lgt6a8dIJJavMuhgbvY" />

                    <Parrafo title="Title: Hola" description="Description: HolaHola" />
                </div>

                <div className="contenedor-tarea">
                    <Div id="Id: 4lgt6a8dIJJavMuhgbvY" />

                    <Parrafo title="Title: Hola" description="Description: HolaHola" />
                </div>

                <div className="contenedor-tarea">
                    <Div id="Id: 4lgt6a8dIJJavMuhgbvY" />

                    <Parrafo title="Title: Hola" description="Description: HolaHola" />
                </div>
            </div>



        </div>
    )
} 