import React from 'react';
import Symbols from './elements/_symbols-list';

export default function Home() {
  return (
    <section id="home" className="section home">
      <div className="wrapper">
        <div className="content">
            <h1 className="h1 content-text active">
              <div className="phrase">
                <span>
                    Frontend Web Entwicklung ist,
                </span>                
              </div>
              <div className="phrase">
                    <span>Syzygy von Digitale Kommunikation,</span>
                    <span> Kunst und Technologie</span>
                </div>  
            </h1>
            <Symbols />
        </div>   
      </div>
    </section>
  );
}