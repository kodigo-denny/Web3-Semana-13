import React from "react";

class Boton extends React.Component{

    constructor(props){
        super(props)
        console.log("Constructor desde Boton")
    }

    componentDidMount(){
        console.log("Did mount desde Boton")
    }

    componentDidUpdate(){
        console.log("Did Update desde Boton " + this.props.children)
    }

    render(){
        console.log("Render desde boton")
        return <button onClick={this.props.evento} className="col-4 btn btn-success">
            {this.props.children}
            </button>
        
    }
}

export default Boton