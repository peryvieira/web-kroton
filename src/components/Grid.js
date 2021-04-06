import React, { Component } from 'react';
import './Grid.css';
import {CardGrid} from './CardGrid'
import imgGrid from '../resources/imgGrid.png'

export class Grid extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
       return(        
        <div className='grid'>
            <h2>Título 4</h2>
            <div className='grid-box'>
                <CardGrid img={imgGrid} texto="Texto ........." titulo="Titulo......."/>
                <CardGrid img={imgGrid} texto="Texto ........." titulo="Titulo......."/>
                <CardGrid img={imgGrid} texto="Texto ........." titulo="Titulo......."/>
                <CardGrid img={imgGrid} texto="Texto ........." titulo="Titulo......."/>
                <CardGrid img={imgGrid} texto="Texto ........." titulo="Titulo......."/>
                <CardGrid img={imgGrid} texto="Texto ........." titulo="Titulo......."/>
                <CardGrid img={imgGrid} texto="Texto ........." titulo="Titulo......."/>
            </div>
        </div>
       )
    }
}