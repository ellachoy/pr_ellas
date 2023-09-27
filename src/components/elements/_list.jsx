import React from 'react';

export default function List({ title, description}) {
    return (
        <li>
            <div>
                <h3 className="headline h4">{title}</h3>
                <p>{description}</p>
            </div>       
        </li>
    );
}