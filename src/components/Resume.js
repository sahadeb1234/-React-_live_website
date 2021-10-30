import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import Bar from './Bar';

const languages = [
    {
        icon: python,
        name: 'Python',
        level: '45'
    },
    {
        icon: react,
        name: 'Java',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'react',
        level: '60'
    },
    {
        icon: react,
        name: 'Django',
        level: '80'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '80'
    }
]

const tools = [
    {
        icon: react,
        name: 'Figma',
        level: '85'
    },
    {
        icon: react,
        name: 'Photoshop',
        level: '45'
    },
    {
        icon: react,
        name: 'Illustrator',
        level: '60'
    },
    {
        icon: react,
        name: 'Framer',
        level: '45'
    },

]


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        b.sc. (hons.) computer science
                        </h5>
                        <p className="resume-card__name">
                        University of Wolverhampton -
2022
                        </p>
                        <p className="resume-card__details">Computer Science: Reliance International Academy - 2076
NEB.
b.sc. (hons.) computer science: University of Wolverhampton -
2022</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        Web Developer
                        </h5>
                        <p className="resume-card__name">
                        02/2021 to till date 
A1soft International, ahalaxmi-2. Lalitpur
                        </p>
                        <p className="resume-card__details">Work with senior developer to manage large, complex 
design projects for corpora to clients.
</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Resume;