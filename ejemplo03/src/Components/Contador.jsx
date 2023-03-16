import React, {useState} from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";


function Contador(){

    const[valor, setValor] = useState(0)

    return(
        <div>
            <Pantalla val={valor} />
            <Boton evento={() => setValor(valor-1)}>-</Boton>
            <Boton evento={() => setValor(0)}>Reset</Boton>
            <Boton evento={() => setValor(valor+1)}>+</Boton>
        </div>
    )
}

export default Contador