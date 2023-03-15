import React from "react";

class Boton extends React.Component{

    constructor(props){
        super(props)

        this.state = {columna: 3}
    }

    componentDidMount(){
        if(this.props.col!=undefined)
            this.setState({columna: this.props.col})
    }

    render(){
        return <button className={`btn btn-${this.props.estilo===undefined ? "secondary" : this.props.estilo} col-${this.state.columna}`}>{this.props.children}</button>
    }

    /*
        render(){
            return <button className={`btn btn-${this.props.estilo===undefined ? "secondary" : this.props.estilo} col-${this.props.col===undefined ? "3" : this.props.col}`}>{this.props.children}</button>
        }
    */
}

export default Boton