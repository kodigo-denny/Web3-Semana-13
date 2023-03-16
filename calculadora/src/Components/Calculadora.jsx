import React from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

class Calculadora extends React.Component{

    constructor(props){
        super(props)
        this.state = {resultado: "0", op: "", num1: ""}
        this.digitar = this.digitar.bind(this)
        this.limpiar = this.limpiar.bind(this)
        this.backspace = this.backspace.bind(this)
        this.punto = this.punto.bind(this)
        this.operacion = this.operacion.bind(this)
        this.igual = this.igual.bind(this)
    }

    igual(){
        if(this.state.op != ""){
            let num1 = Number(this.state.num1)
            let num2 = Number(this.state.resultado)
            let resultado = 0

            if(this.state.op === "+")
                resultado = num1 + num2
            else if(this.state.op === "-")
                resultado = num1 - num2
            else if(this.state.op === "*")
                resultado = num1 * num2
            else if(this.state.op === "/"){
                if(num2 == 0)
                    alert("No se puede operar")
                else
                    resultado = num1 / num2
            }
                

            this.setState({resultado: resultado.toString()})
        }
    }

    operacion(val){
        //console.log(this.state.resultado)
        this.setState({op: val, num1: this.state.resultado, resultado: "0"})

    }

    punto(){
        if(this.state.resultado.indexOf(".") === -1)
            this.setState({resultado: this.state.resultado+"."})
    }

    backspace(){
        let t = this.state.resultado.length
        let sub = this.state.resultado.substring(0,t-1)

        this.setState({resultado: sub==="" ? "0" : sub})
    }

    limpiar(){
        this.setState({resultado: "0", op: ""})
    }

    digitar(val){
        if(this.state.resultado === "0")
            this.setState({resultado: val})
        else
            this.setState({resultado: this.state.resultado + val})
    }
    
    render(){
        return <div>
            <Pantalla valor={this.state.resultado} />
            <div className="row">
                <Boton evento={this.limpiar} col={9} estilo="danger">CE</Boton>
                <Boton evento={this.backspace} estilo="warning">{"<"}</Boton>
            </div>

            <div className="row">
                <Boton evento={() => this.digitar("7")}>7</Boton>
                <Boton evento={() => this.digitar("8")}>8</Boton>
                <Boton evento={() => this.digitar("9")}>9</Boton>
                <Boton evento={() => this.operacion("/")} estilo="success">/</Boton>
            </div>

            <div className="row">
                <Boton evento={() => this.digitar("4")}>4</Boton>
                <Boton evento={() => this.digitar("5")}>5</Boton>
                <Boton evento={() => this.digitar("6")}>6</Boton>
                <Boton evento={() => this.operacion("*")} estilo="success">*</Boton>
            </div>
            
            <div className="row">
                <Boton evento={() => this.digitar("1")}>1</Boton>
                <Boton evento={() => this.digitar("2")}>2</Boton>
                <Boton evento={() => this.digitar("3")}>3</Boton>
                <Boton evento={() => this.operacion("-")} estilo="success">-</Boton>
            </div>

            <div className="row">
                <Boton evento={() => this.digitar("0")}>0</Boton>
                <Boton evento={this.punto} estilo="success">.</Boton>
                <Boton evento={this.igual} estilo="primary">=</Boton>
                <Boton evento={() => this.operacion("+")} estilo="success">+</Boton>
            </div>
            
        </div>
    }
}

export default Calculadora