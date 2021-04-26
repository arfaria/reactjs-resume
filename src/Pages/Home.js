import React, { Component } from 'react';

import mail from '../assets/images/mail.png'
import github from '../assets/images/github.png'
import smartphone from '../assets/images/smartphone.png'
import home from '../assets/images/home.png'
import avatar from '../assets/images/avatar.png'

class Home extends Component {

    render() {
        return (
            <div>
                <div className="caixa-texto">

                    <h2>Arthur Rodrigues Faria <img src={avatar} fluid className="profile-pic" /></h2>
                    <p></p>
                    <ul>
                        <li><img src={smartphone} fluid className="list-icon" /> (34) 99931-3000</li>
                        <li><img src={mail} fluid className="list-icon" />arthur.r.faria@hotmail.com</li>
                        <li><img src={github} fluid className="list-icon" />github.com/arfaria</li>
                        <li><img src={home} fluid className="list-icon" />Rua Raimundo Gonçalves Dias, 129 - Jaraguá / Uberlândia - MG</li>
                        <li> </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default Home;