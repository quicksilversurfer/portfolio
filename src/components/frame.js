import React from 'react';
import PtsHome from "../components/ptsHome";
import PtsShui from "../components/ptsShui";
import PtsUltrasound from "../components/ptsUltrasound";
import PtsVaccellent from "../components/ptsVaccellent";


//styles
import "../styles/global.css"
import "../styles/typography.css"
import * as frameStyles from "../styles/frame.module.css"

//markup
const Frame = ({ cover, children }) => {

    let canvas;

    if (cover === "home") { canvas = <PtsHome name="canvas"/> }
    else if (cover === "ultrasound") { canvas = <PtsUltrasound name="canvas"/> }
    else if (cover === "shui") { canvas = <PtsShui name="canvas"/> }
    else if (cover === "vaccellent") { canvas = <PtsVaccellent name="canvas"/> }

    return (
        <div className={`${frameStyles.outerWrapper}`}>
            <div className={`${frameStyles.canvasWrapper}`}>
                { canvas }
            </div>
            <div className={`${frameStyles.innerWrapper}`}>
                {children}
            </div>

        </div>
    )
}

export default Frame