import React from 'react';
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'
import Skillcard from './Skillcard';



const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using and SQLlite",
    },
    {
        icon: api,
        title: "API Development",
        about: "I can develop robust REST API using django-rest-api "
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "a daily problem solver in HackerRank and Leetcode"
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "minimalistic user interface designer using figma and  framer"
    },
    {
        icon: computer,
        title: "Whatever",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!"
    },
]


const About =() =>{

    return(

        <div>
           <div className="about">


               <h6 className="about_intro">

               I, Sahadeb Rokaya a young teenaged person who's consistently 
exploring what's going on.
Currently undergoing studies from University of Wolverhampton 
in Computer Science(Hons.) Consistently learning new ideas and 
loving the process in it.

        
               </h6>
               <div className="container about_container">

                   <h6 className="about_heading">What I offer</h6>
                   <div className="row">
                   {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                   </div>


               </div>
           </div>


        </div>
    );
};

export default About;