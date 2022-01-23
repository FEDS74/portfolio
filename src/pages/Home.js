import React from 'react'
import {Container, Button, Image} from 'react-bootstrap';
import { About } from './About';
import { Work } from './Work';
import { Contact } from './Contact';

import './Home.css';


 export const Home = () => (
    <div>
        <section id="home" className='home'>
            <div className='container d-flex align-items-center justify-content-center text-center content'>
                <div className='text-white'>
                    <h1 className='mb-3'>Thomas Bach-Nilsen</h1>
                    <h5 className='mb-4'>Front-End Developer</h5>
                    <a
                        className='btn btn-outline-light btn-lg m-2'
                        href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                        role="button"
                        rel="nofollow"
                        target="_blank">Check out my work</a>
                </div>
                
            </div>
        </section>
        <About />
        <Work />
        <Contact />

    </div>
)      