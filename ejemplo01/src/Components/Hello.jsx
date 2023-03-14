import React from 'react'

class Hello extends React.Component{

    constructor(props){
        super(props)
        this.state = {num: 0, nombre: "Denny"}
        this.evento = this.evento.bind(this)
        console.log(props)
    }

    evento(val){
        this.setState({num: this.state.num+val})
        //this.setState({nombre: "Alexis"})
    }

    render(){
        console.log("render")
        return <div>
            <h1>{this.state.num}</h1>
            <h1>{this.state.num}</h1>
            <h2>{this.state.nombre}</h2>
            <button onClick={() => this.evento(+1)}>+</button>
            <button onClick={() => this.evento(-1)}>-</button>
            <h1>Hello World, {this.props.children}</h1>
            <h2>Subtitulo</h2>
            <h3>{this.props.valor}</h3>
        </div>
        
    }
}

export default Hello