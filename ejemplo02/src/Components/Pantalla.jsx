import React from "react";

class Pantalla extends React.Component{

    constructor(props){
        super(props)
        console.log("Constructor desde Pantalla")
    }

    componentDidMount(){
        console.log("Did mount desde Pantalla")
    }

    componentDidUpdate(prevProps){
        console.log("Did Update desde Pantalla: " + prevProps.valor)
    }

    render(){
        console.log("Render Pantalla")
        return <div className="col-12">
            <input type="text" className="form-control" readOnly value={this.props.valor} />
        </div>
    }
}

export default Pantalla