import React, { Component } from 'react';
import './NavBar.css';
import logoWhats from '../resources/logoWhats.png'

export class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return(        
            <nav>
                <div>
                    <img src={logoWhats} />
                    <span>Fale Conosco</span>
                </div>
            </nav>
        )
     }
}