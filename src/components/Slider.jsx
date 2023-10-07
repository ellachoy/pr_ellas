
import { React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Keyboard, Scrollbar, Navigation} from 'swiper/modules';
import { ExternalLink } from 'react-external-link';
import SliderContent from '../content/sliderContent';

export default function Slider() {
    return(
      <div className="slider">
        <Swiper 
            navigation={true}
            autoHeight={true}
            modules={[Keyboard, Scrollbar, Navigation]} 
            spaceBetween={30}
            slidesPerView={1}
            keyboard={{
                enabled: true,
            }}
            lazy={true}
            scrollbar={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}  
        >
            {SliderContent.map((slide, index)=> (
                <SwiperSlide key={index}>                  
                        <ExternalLink href={slide.path}>
                            <div className="image">
                                <img src={slide.image} loading="lazy" alt="sliderImage" className="image" />
                            </div>
                            <h4 className="h5">{slide.label}</h4>   
                    </ExternalLink>
                    <div>
                        <p>{slide.text}</p>
                        <p>{slide.subText}</p>
                        <ExternalLink href={slide.gitpath} className='more'>
                            <span className='sub-text'>GitHub Repository</span>
                        </ExternalLink>                                                                
                    </div>                                
                </SwiperSlide> 
            ))}                   
        </Swiper>   
      </div>
    )
}