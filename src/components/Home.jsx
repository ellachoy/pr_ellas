import { InView } from 'react-intersection-observer';
import Symbols from './elements/symbols-list';

export default function Home() {

  return (
    <InView>
      {({inView, ref}) => (
        <section ref={ref} id="home" className="home">
          <div className={inView ? "active": "inactive"}>
            <div className="wrapper">
              <div className="content">
                  <h1 className="h1 content-text">
                    <div >
                      <div className="phrase">
                      <span>
                          Frontend Web Entwicklung ist,
                      </span>                
                    </div>
                    <div className="phrase">
                          <span>Synergie von Digitaler Kommunikation,</span>
                          <span> Kunst und Technologien</span>
                      </div>  
                    </div>            
                  </h1>
                  <Symbols />
              </div>   
            </div>
          </div>     
        </section>
      )}       
    </InView>  
  );
}