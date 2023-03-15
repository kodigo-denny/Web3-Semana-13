import React from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

class Calculadora extends React.Component{

    constructor(props){
        super(props)
        this.state = {num1: 0}
    }
    
    render(){
        return <div>
            <Pantalla valor={this.state.num1} />
            <div className="row">
                <Boton col={9} estilo="danger">CE</Boton>
                <Boton estilo="warning">{"<"}</Boton>
            </div>

            <div className="row">
                <Boton>7</Boton>
                <Boton>8</Boton>
                <Boton>9</Boton>
                <Boton estilo="success">/</Boton>
            </div>

            <div className="row">
                <Boton>4</Boton>
                <Boton>5</Boton>
                <Boton>6</Boton>
                <Boton estilo="success">*</Boton>
            </div>
            
            <div className="row">
                <Boton>1</Boton>
                <Boton>2</Boton>
                <Boton>3</Boton>
                <Boton estilo="success">-</Boton>
            </div>

            <div className="row">
                <Boton>0</Boton>
                <Boton estilo="success">.</Boton>
                <Boton estilo="primary">=</Boton>
                <Boton estilo="success">+</Boton>
            </div>
            
        </div>
    }
}

export default Calculadora