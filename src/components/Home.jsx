import React, {useState, useEffect} from 'react';
import Symbols from './elements/symbols-list';

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.addEventListener('load', (event) => {
      event.preventDefault();
      setLoading(true);
    })   
  },[]);
  
  return (
    <section id="home" className="section home">
      <div className="wrapper">
        <div className="content">
            <h1 className="h1 content-text">
              <div className={loading ? "active": "inactive"}>
                <div className="phrase">
                <span>
                    Frontend Web Entwicklung ist,
                </span>                
              </div>
              <div className="phrase">
                    <span>Synergie von Digitale Kommunikation,</span>
                    <span> Kunst und Technologien</span>
                </div>  
              </div>            
            </h1>
            <Symbols />
        </div>   
      </div>
    </section>
  );
}