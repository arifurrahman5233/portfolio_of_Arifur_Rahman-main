import React from 'react';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Profile from '../../images/profile.jpg';
import HomeContent from '../HomeContent/HomeContent';
import Skill from '../Skill/Skill';
import Education from '../Education/Education';

const Home = () => {
    return (
        <div className="container-fluid bg-dark h-100">
            <div className="row no-gutters">



                {/* MAIN CONTENTS */}
                <div className="col-sm-10 col-md-10 col-lg-10">
                    <Routes>
                        <Route path="//*" element={<HomeContent />} />
                        <Route path="home" element={<HomeContent />} />
                        <Route path="skill" element={<Skill />} />
                        <Route path="education" element={<Education />} />
                        <Route path="project" element={<Portfolio />} />
                        <Route path="contact" element={<Contact />} />
                    </Routes>
                </div>

                {/* MENUBAR */}
                <div className="col-sm-2 col-md-2 col-lg-2" style={{ position: 'sticky' }}>
                    <div >
                        <div>
                            <div className="card-header p-0">
                                <img className="img-fluid rounded-circle border border-secondary" src={Profile} alt="" />
                            </div>
                            <div className="bg-transparent text-white fw-bold text-center"><h4 className="p-2">MD ARIFUR RAHMAN</h4>
                                <h5 className='text-light'>"Junior web Developer"</h5> 
                                <h6 className='text-light'> React.js || Node.js</h6>
                            </div>
                        </div>

                        <div className="px-3 py-2">
                            <Link className="text-decoration-none fw-bold text-secondary" to="home"><i className="fas fa-home"></i> HOME</Link>
                        </div>

                        <div className="px-3 py-2">
                            <Link className="text-decoration-none fw-bold text-secondary " to="skill"><i className="fas fa-tasks"></i> SKILLS</Link>
                        </div>

                        <div className="px-3 py-2">
                            <Link className="text-decoration-none fw-bold text-secondary" to="education"><i className="fas fa-graduation-cap"></i> EDUCATION</Link>
                        </div>

                        <div className="px-3 py-2">
                            <Link className="text-decoration-none fw-bold text-secondary" to="project"><i class="fas fa-briefcase"></i> PROJECTS</Link>
                        </div>

                        <div className="px-3 py-2">
                            <Link className="text-decoration-none fw-bold text-secondary" to="contact"><i className="fas fa-envelope"></i> CONTACT</Link>
                        </div>

                        <div className="px-3 py-2">
                            <div className="d-flex justify-content-around">
                                <a href="https://www.linkedin.com/in/md-arifur-rahman-19622a190/" target="_blank" rel="noreferrer"><button className="btn btn-secondary fw-bold d-block"><i className="fab fa-linkedin"></i></button></a>

                                <a href="https://github.com/arifurrahman5233" target="_blank" rel="noreferrer"><button className="btn btn-secondary fw-bold d-block"><i className="fab fa-github-square"></i></button></a>

                            </div>
                            <p className="text-secondary text-center">2021 &copy; <cite>Arifur Rahman</cite> <br /> All Right Reserved</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;