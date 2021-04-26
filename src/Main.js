import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Home from './Pages/Home';
import Perfil from './Pages/Perfil';
import Formacoes from './Pages/Formacoes';
import Experiencias from './Pages/Experiencias';
import Qualificacoes from './Pages/Qualificacoes';
import Obs from './Pages/Obs';

{/* Classe principal que */}
class Main extends Component {
    render() {
        return (
            <div>

                <Tabs defaultActiveKey="inicio" className="tabs-spa"> {/* Barra de abas, na parte de cima da página. Navega entre as páginas. */}
                    <Tab eventKey="inicio" title="Inicio">
                        <Home />
                    </Tab>

                    <Tab eventKey="perfil" title="Perfil">
                        <Perfil />
                    </Tab>

                    <Tab eventKey="contact" title="Experiências" >
                        <Experiencias />
                    </Tab>

                    <Tab eventKey="formacoes" title="Formações">
                        <Formacoes />
                    </Tab>
                    <Tab eventKey="qualificacoes" title="Qualificações">
                        <Qualificacoes />
                    </Tab><Tab eventKey="obs" title="Observações">
                        <Obs />
                    </Tab>
                </Tabs>

            </div>
        );
    }
}

export default Main;