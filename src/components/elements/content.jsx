import React from 'react';

export default function Content({ title, intro, description, subText, quote}) {
    return (
        <>         
            {title ? <h2 className="h4 title-label">{title}</h2>: null}        
            {intro ? <h3 className="h3 intro">{intro}</h3>: null}
            {description ? <p>{description}</p> :null}
            {subText ? <p className="sub-text" > {subText}</p> :null}
            {quote ? <blockquote><p>{quote}</p></blockquote>:null}
        </>
    );
}