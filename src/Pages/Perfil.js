import React, { Component } from 'react';

class Perfil extends Component {

    render() {
        return (
            <div>
                <div className="caixa-texto">

                    <h2>Perfil</h2>
                    <ul>
                        <li>Brasileiro, 27 anos. Graduando em Sistemas de Informação, com curiosidade em aprender e criatividade para criar. </li>
                        <li> A área de TI sempre me despertou interesse, me intrigando em como a tecnologia funciona por trás. Tenho como objetivo agregar, adquirir experiência e crescer.</li>
                    </ul>
                    <h2>Competências</h2>
                    <ul>
                        <li>Criatividade;</li>
                        <li>Trabalho em equipe;</li>
                        <li>Comunicação interpessoal;</li>
                        <li>Organização;</li>
                        <li>Facilidade de aprendizado.</li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default Perfil;