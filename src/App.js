import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import NaviBar from './Components/Navibar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"

import {About} from './Components/About';
import {Projects} from './Components/Projects';
import {Contacts} from './Components/Contacts';
import {Hire} from './Components/Hire';

function App() {
    return ( 
        <>
        <Router>
            <NaviBar />
            <Routes>
                <Route exact path="/" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/contacts" element={<Contacts />} />
                <Route exact path="/hire" element={<Hire />} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
