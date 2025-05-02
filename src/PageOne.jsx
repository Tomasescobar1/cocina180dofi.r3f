import {React, useState} from "react";
import CocinaP1 from "./images/Cocina-180-P1.png";
import CocinaP2 from "./images/Cocina-180-P2.png";
import CocinaP3 from "./images/Cocina-180-P3.png"

function Steps()
{


    return (
        <section className="picDiv" >
            <img className="step1IMG" src={CocinaP1} />
            <img className="step2IMG" src={CocinaP2} />
            <img className="step3IMG" src={CocinaP3} />
        </section>
    )
}

export default Steps