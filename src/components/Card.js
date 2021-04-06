import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
       return(        
        <div className='cardContainer'>
            <img id='imageBox' src={this.props.img}/>
            
            <div class='cardContent'>
                <h1>{this.props.titulo}</h1>
                <p>{this.props.content}</p>
                <button>{this.props.button}</button>
            </div>
        </div>
       )
    }
}