import * as React from "react";
import portfolio from "../files/Kaizix-portfolio-full-eng.pdf"

const PortFolio = () => {
    return (
        <>
            <object width="100%" height="700" data={portfolio} type="application/pdf">   </object>
        </>
    )
}

export default PortFolio