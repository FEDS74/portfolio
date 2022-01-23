import React from 'react'
import {Container, Row} from 'react-bootstrap';
import {HiChevronRight} from 'react-icons/hi';

import './About.css';

export const About = () => (<div>

    <section className='about' id='about'>
        <div className='section-title'>
            <h2>About</h2>
        </div>
        <div className='image d-flex m-auto mb-4 align-items-center'></div>
        <Row className='d-flex flex-wrap-nowrap container-section'>
            <div className='col-lg-8 m-auto d-flex flex-column align-items-stretch'>
                <div className='content ps-lg-4 m-auto d-flex flex-column justify-content-center'>
                    <Row>
                        <aside className='col-lg-6'>
                            <ul>
                                <li>
                                    <HiChevronRight/>
                                    <strong>Name:</strong>
                                    <p>Thomas Bach-Nilsen</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <HiChevronRight/>
                                    <strong>Mobile:</strong>
                                    <p>+47 95 25 53 36</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <HiChevronRight/>
                                    <strong>Website:</strong>
                                    <p>www.feds.no</p>
                                </li>
                            </ul>
                        </aside>
                        <aside className='col-lg-6'>
                            <ul>
                                <li>
                                    <HiChevronRight/>
                                    <strong>Email:</strong>
                                    <p>post@feds.no</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <HiChevronRight/>
                                    <strong>City:</strong>
                                    <p>Frogner</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <HiChevronRight/>
                                    <strong>Freelance:</strong>
                                    <p>Available 50%</p>
                                </li>
                            </ul>
                        </aside>

                        <div className='skills-content ps-lg-4'>
                            <div className='progress'>
                                <span className='skill'>HTML
                                    <i className='val'>100%</i>
                                </span>
                                <div className='progress-bar-wrap'>
                                    <div
                                        className='progress-bar'
                                        role='progressbar'
                                        aria-valuenow='100'
                                        aria-valuemin='0'
                                        aria-valuemax='100'
                                        style={{
                                            width: 100 + '%'
                                        }}></div>
                                </div>
                            </div>

                            <div className='progress'>
                                <span className='skill'>CSS
                                    <i className='val'>90%</i>
                                </span>
                                <div className='progress-bar-wrap'>
                                    <div
                                        className='progress-bar'
                                        role='progressbar'
                                        aria-valuenow='90'
                                        aria-valuemin='0'
                                        aria-valuemax='100'
                                        style={{
                                            width: 90 + '%'
                                        }}></div>
                                </div>
                            </div>

                            <div className='progress'>
                                <span className='skill'>JavaScript
                                    <i className='val'>50%</i>
                                </span>
                                <div className='progress-bar-wrap'>
                                    <div
                                        className='progress-bar'
                                        role='progressbar'
                                        aria-valuenow='75'
                                        aria-valuemin='0'
                                        aria-valuemax='100'
                                        style={{
                                            width: 50 + '%'
                                        }}></div>
                                </div>
                            </div>
                        </div>

                    </Row>
                </div>
            </div>
        </Row>
    </section>
</div>

)