import {useState} from 'react'
import SLIDES from "../../Data/Slides"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import {Navigation, EffectFade,Pagination,Autoplay} from "swiper"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/autoplay"

const SlideShow = () => {
  const[activeIndex, setActiveIndex] = useState(0);
  

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  }

  return (
    <div>
      <Swiper
        modules={[Navigation, EffectFade,Pagination,Autoplay]}
        navigation
        effect="fade"
        pagination={{clickable:true}}
        autoplay={{delay:8000}}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        speed={1000}
        slidesPerView={1}
        loop
        className="swiper"
      >
        {SLIDES.map((slide)=> {
          return (
          <SwiperSlide key={slide.id} className="swiperslide" >
            <img src={slide.image} alt='slide'/>
            <div className={`swipertext ${slide.id -1 === activeIndex ? 'active':''}`}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SlideShow