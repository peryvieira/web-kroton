import React, { Component } from 'react';
import './CardPergunta.css';
import lupa from '../resources/lupa.png'

export class CardPergunta extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
       return(        
            <div className="card">
                <div className="cardPergunta" >
                    <h1>Título 3</h1>
                    <div className="cardPergunta-form">
                        <div className="form">
                            <span className="form-title">Pergunta 1</span>
                            <input placeholder="Digite a resposta" className="form-input"></input>
                        </div>
                        <div className="form">
                            <span className="form-title">Pergunta 2</span>
                            <input placeholder="Digite a resposta" className="form-input"></input>
                        </div>
                        <div className="form">
                            <span className="form-title">Pergunta 3</span>
                            <select placeholder="selecione a resposta" className="form-select"></select>
                        </div>
                        <button className="button-buscar"><img src={lupa}/></button>
                    </div>
                </div>
            </div>
       )
    }
}