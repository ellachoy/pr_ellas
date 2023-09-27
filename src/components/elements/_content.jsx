import React from 'react';

export default function Content({ title, intro, description, quote}) {
    return (
        <>
            <h2 className="h4 title-label">{title}</h2>        
            {intro ? <h3 className="h2 intro">{intro}</h3>: null}
            {description ? <p>{description}</p> :null}
            {quote ? <blockquote><p>{quote}</p></blockquote>:null}               
        </>
    );
}