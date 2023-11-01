
import React from 'react';
import NavBar from './NavBar/NavBar';
import Intro from './Intro/Intro';
import Events from './Events/Events';
import History from './History/History';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Membership from './Membership/Membership';
import About from './About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Main.css';

const Main = () => {
    return (
        <BrowserRouter basename='/Golf'>
            <NavBar></NavBar>
            <div>
                <Routes>
                    <Route path="/" element={<Intro/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/membership" element={<Membership/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Main;
