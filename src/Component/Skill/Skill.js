import React from 'react';
import html5 from '../../images/html5.png'
import css3 from '../../images/css3.png'
import js from '../../images/js.png'
import bootstrap from '../../images/bootstrap.png'
import reactlogo from '../../images/reactjs.png'
import firebase from '../../images/firebase.png'
import nodejs from '../../images/nodejs.png'
import mongodb from '../../images/mongodb.jpg'
import mysql from '../../images/mysql.png'

import php from '../../images/php.png'
import tailwind from '../../images/tailwind.png'
import contextlogo from '../../images/contextapi.png'

import laravel from '../../images/laravel.png'
import reduxlogo from '../../images/redux.png'

import git from '../../images/github.png'
import vscode from '../../images/vscode.png'
import xampp from '../../images/xampp.png'
import netlify from '../../images/netlify.png'
import heroku from '../../images/heroku.png'

const Skill = () => {
    return (
        <div>
            <div class="nav nav-tabs text-secondary fw-bold m-3">
                <div className="px-3 py-2 nav-item">
                    <h2 className="float-end"><i class="fas fa-tasks"></i> MY SKILLS</h2>
                </div>
            </div>

            <div class="nav text-white fw-bold p-2 m-3">
                <h2>Expertise:</h2>
                <img src={html5} class="img-fluid mx-2 rounded-circle" alt="..." style={{height:'50px', width:'50px'}} />
                <img src={css3} class="img-fluid mx-2 rounded-circle" alt="..." style={{height:'50px', width:'50px'}} />
                <img src={js} class="img-fluid mx-2 rounded-circle" alt="..." style={{height:'50px', width:'50px'}} />
                <img src={bootstrap} class="img-fluid mx-2 rounded-circle" alt="..." style={{height:'50px', width:'50px'}} />
                <img src={reactlogo} class="img-fluid mx-2 rounded-circle" alt="..." style={{height:'50px', width:'50px'}} />
                <img src={firebase} class="img-fluid mx-2 rounded-circle" alt="..." style={{height:'50px', width:'50px'}} />
                <img src={nodejs} class="img-fluid mx-2 rounded-circle" alt="..." style={{height:'50px', width:'50px'}} />
                <img src={mongodb} class="img-fluid mx-2 rounded-circle" alt="..." style={{height:'50px', width:'50px'}} />
                
            </div>

            <div class="nav text-white fw-bold p-2 m-3">
                <h2>Comfortable:</h2>
                <img src={tailwind} class="img-fluid mx-2 rounded-circle" alt="..." style={{ height: '50px', width: '50px' }} />
                <img src={contextlogo} class="img-fluid mx-2 rounded-circle" alt="..." style={{ height: '50px', width: '50px' }} />
                
            </div>

            <div class="nav text-white fw-bold p-2 m-3">
                <h2>Familiar:</h2>
                <img src={reduxlogo} class="img-fluid mx-2 rounded-circle" alt="..." style={{ height: '50px', width: '50px' }} />
               
            </div>

            <div class="nav text-white fw-bold p-2 m-3">
                <h2>Tools:</h2>
                <img src={git} class="img-fluid mx-2 rounded-circle" alt="..." style={{ height: '50px', width: '50px' }} />
                <img src={vscode} class="img-fluid mx-2 rounded-circle" alt="..." style={{ height: '50px', width: '50px' }} />
                <img src={netlify} class="img-fluid mx-2 rounded-circle" alt="..." style={{ height: '50px', width: '50px' }} />
                <img src={heroku} class="img-fluid mx-2 rounded-circle" alt="..." style={{ height: '50px', width: '50px' }} />
                
            </div>
   
        </div>
    );
};

export default Skill;