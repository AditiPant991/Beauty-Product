import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination,Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


import './Slider.css'

import {ProductsData, SliderProducts} from '../../data/products'

function Slider() {
  return (
    <div className='s-container'>
        <Swiper
        modules={[Pagination,Navigation]}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        // navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        >
                {
                    ProductsData.map((slides,i)=>(
                        <SwiperSlide>
                           <div className='left-s'>
                            <div className='name'>
                                <span>{slides.name}</span>
                                <span>{slides.detail}</span>
                            </div>
                            <span>{slides.price}$</span>
                            <div>Shop now</div>
                            </div>
                            <img src={slides.img} alt='product'  className={"img-p"} />
                        </SwiperSlide>

                    ))
                }
            
        </Swiper>
    </div>
  )
}

export default Slider