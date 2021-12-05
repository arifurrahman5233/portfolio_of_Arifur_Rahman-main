import React from 'react';
// import { Link } from 'react-router-dom';
import BgImg from '../../images/banner.jpeg';

const HomeContent = () => {
    return (
        <div>
            <div className="card bg-dark text-white">
                <img className="card-img img-fluid h-100 opacity-50" src={BgImg} alt="" />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                    <div className="">
                        <h1 className="card-title text-light fw-bold"> MD ARIFUR RAHMAN</h1>
                        <h2 className="card-title text-light fw-bold d-block text-secondary">"Junior web Developer"</h2>
                        <br />
                        <a href="https://drive.google.com/file/d/1-ngkgTQw1IeWPZXEOHu0mNZFgl2ZhulX/view?usp=sharing" target="_blank" rel="noreferrer"><button className="btn  btn-dark fw-bold  text-decoration-none ">View Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;