import React from 'react';

class Pantalla extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <input type="text" readOnly disabled value={this.props.valor} className='form-control pantalla' />
        </div>

    }
}

export default Pantalla