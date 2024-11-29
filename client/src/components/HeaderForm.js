import Hdos from "./Hdos"
import Title from "./Title"
import React from "react"

const HeaderForm = ({ text }) => {
    return (
        <div>
            < div className="card-head" >
                <Hdos text={text}/>
            </div >
            <div className="card-head">
                <Title />
            </div>
        </div>
    )
}

export default HeaderForm;