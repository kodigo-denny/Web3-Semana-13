import React from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

class Contador extends React.Component{

    constructor(props){
        super(props)
        this.state = {num: 0}
        console.log("Constructor desde contador")
        this.cambiar = this.cambiar.bind(this)
    }

    cambiar(val){
        if(val === 0)
            this.setState({num: 0})
        else
            this.setState({num: this.state.num+val})
    }

    componentDidMount(){
        console.log("Did mount desde contador")
    }

    componentDidUpdate(){
        console.log("Did Update desde Contador")
    }

    componentWillUnmount(){
        console.log("Se elimino")
    }

    render(){
        console.log("Render desde contador")
        return <div>
            <Pantalla valor={this.state.num} />
            <div className="row">
                <Boton evento={() => this.cambiar(-1)}>-</Boton>
                <Boton evento={() => this.cambiar(0)}>Reset</Boton>
                <Boton evento={() => this.cambiar(+1)}>+</Boton>
            </div>
        </div>
    }
}

export default Contador