import React from 'react';

export default function SkillsList({ headline, description}) {
    return (
        <li>
            <div className="container">
                <h5 className="headline h5">{headline}</h5>
                <p>{description}</p>
            </div>          
        </li>
    );
}