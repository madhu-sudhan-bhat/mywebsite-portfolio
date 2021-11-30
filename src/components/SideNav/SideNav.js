import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQGHS5UFyHtIpQ/profile-displayphoto-shrink_200_200/0/1637136874386?e=1643846400&v=beta&t=QWa2kL4vE7fRzzUBoLO1F05sextw9R1CYl3rujsi9tI"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Madhu s bhat</h2>
            <p className="subtitle">"the code Gladiator"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};
