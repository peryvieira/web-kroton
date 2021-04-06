import React, { Component } from 'react';
import './CardGrid.css';

export class CardGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
       return(        
        <div className='cardGrid'>
            <img src={this.props.img}/>
            <span>{this.props.texto}</span>
            <h2>{this.props.titulo}</h2>
            <button>Acessar</button>
        </div>
       )
    }
}