import React from 'react';
import project1 from '../../images/book-selling.png'
import project2 from '../../images/tourism.png'
import project3 from '../../images/eyecare.png'

const Portfolio = () => {
    return (
        <div>
            <div class="nav nav-tabs text-secondary fw-bold m-3">
                <div className="px-3 py-2 nav-item">
                    <h2 className="float-end"><i class="fas fa-briefcase"></i> MY PROJECTS</h2>
                </div>
            </div>

            <div class="card mb-3 bg-light">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={project1} class="img-thumbnail rounded-start" style={{height:'500px', width:'100%'}} alt="..."/>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h3 class="card-title"><span className="fw-bold">Project Title:</span> Poetry Daily</h3>
                            <h5 class="card-title"><span className="fw-bold">Using Technology:</span> React, Bootstrap, Express, MongoDB.</h5>
                            <h5 class="card-title"><span className="fw-bold">Project Title:</span></h5>
                            <ul>
                                <li>This is an online store where can buy Poetry books.</li>
                                <li>Users can place orders for poetry books & write feedback, which will be saved in the database.</li>
                                <li>Admins have the ability to create new items, as well as manage orders and products.</li>
                                <li>Ordering and reviewing are managed by the user.</li>
                            </ul>
                        </div>
                        <div className="card-footer d-flex justify-content-around">
                            <a href="https://poetry-daily-online-shop.netlify.app/" target="_blank" rel="noreferrer"><button className="btn btn-dark  fw-bold">Preview</button></a>

                            <a href="hhttps://github.com/arifurrahman5233/Poetry_Daily_client" target="_blank" rel="noreferrer"><button className="btn btn-dark  fw-bold">Client Side Code</button></a>

                            <a href="https://github.com/arifurrahman5233/Poetry_Daily_Server" target="_blank" rel="noreferrer"><button className="btn btn-dark  fw-bold">Server Side Code</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3 bg-light">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={project2} class="img-thumbnail rounded-start" style={{ height: '500px', width: '100%' }} alt="..." />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h3 class="card-title"><span className="fw-bold">Project Title:</span> Tour & Trip</h3>
                            <h5 class="card-title"><span className="fw-bold">Using Technology:</span> React, Bootstrap, Express, MongoDB.</h5>
                            <h5 class="card-title"><span className="fw-bold">Project Title:</span></h5>
                            <ul>
                                <li>On the manages, users can book trips and view order details.</li>
                                <li>CRUD operations can only be performed by Authenticated Users.</li>
                                <li>Some of the login mechanisms offered include Email, password, and Google login</li>
                            </ul>
                        </div>
                        <div className="card-footer d-flex justify-content-around">
                            <a href="https://tour-and-trip-booking-site.netlify.app/" target="_blank" rel="noreferrer"><button className="btn btn-dark  fw-bold">Preview</button></a>

                            <a href="https://github.com/arifurrahman5233/-tourism-or-delivery-website-client-side-11" target="_blank" rel="noreferrer"><button className="btn btn-dark  fw-bold">Client Side Code</button></a>

                            <a href="https://github.com/arifurrahman5233/tourism-or-delivery-website-server-side-11" target="_blank" rel="noreferrer"><button className="btn btn-dark  fw-bold">Server Side Code</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3 bg-light">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={project3} class="img-thumbnail rounded-start" style={{ height: '500px', width: '100%' }} alt="..." />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h3 class="card-title"><span className="fw-bold">Project Title:</span> Eye Care</h3>
                            <h5 class="card-title"><span className="fw-bold">Using Technology:</span> React, Bootstrap, Fake Data.</h5>
                            <h5 class="card-title"><span className="fw-bold">Project Title:</span></h5>
                            <ul>
                                <li>Added an Authentication System (user).</li>
                                <li>An appointment can be made quickly and easily by a patient or user.</li>
                                <li>Making an appointment requires the user to create an account using email or Google.</li>
                            </ul>
                        </div>
                        <div className="card-footer d-flex justify-content-around">
                            <a href="https://eye-care-hospital-website.netlify.app/" target="_blank" rel="noreferrer"><button className="btn btn-dark  fw-bold">Preview</button></a>

                            <a href="https://github.com/arifurrahman5233/healthcare-related-website-09" target="_blank" rel="noreferrer"><button className="btn btn-dark fw-bold">Client Side Code</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;