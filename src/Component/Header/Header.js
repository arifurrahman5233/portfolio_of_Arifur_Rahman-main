import React from 'react';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import Profile from '../../images/profile.jpg';

const Header = () => {
    return (
        <div className="container-fluid px-0 bg-dark">
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-2 h-100">
                        {/* <div className="card bg-dark">
                            <div className="card-header">
                                <img className="img-fluid" src={Profile} alt="" />
                            </div>
                            <div className="card-footer">Md. Riajul Islam</div>
                        </div> */}
                        <div className="">
                            <div className="card-header p-0">
                                <img className="img-fluid rounded-circle" src={Profile} alt="" />
                            </div>
                            <div className="card-footer text-success fw-bold text-center"><h4>Md. Riajul Islam</h4></div>
                        </div>
                        <div className="p-4">
                            <Link className="text-decoration-none fw-bold" to="home"><i className="fas fa-home"></i> HOME</Link>
                        </div>
                        <div className="p-4">
                            <Link className="text-decoration-none fw-bold" to="about"><i className="fas fa-user"></i> ABOUT</Link>
                        </div>
                        <div className="p-4">
                            <Link className="text-decoration-none fw-bold" to="resume"><i className="fas fa-address-card"></i> RESUME</Link>
                        </div>
                        <div className="p-4">
                            <Link className="text-decoration-none fw-bold" to="portfolio"> <i className="fas fa-portrait"></i> PORTFOLIO</Link>
                        </div>
                        <div className="p-4 mt-auto">
                            <Link className="text-decoration-none fw-bold" to="contact"><i className="fas fa-envelope"></i> CONTACT</Link>
                        </div>
                    </div>
                    <div className="col-10">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="home" element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="resume" element={<Resume />} />
                            <Route path="portfolio" element={<Portfolio />} />
                            <Route path="contact" element={<Contact />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;