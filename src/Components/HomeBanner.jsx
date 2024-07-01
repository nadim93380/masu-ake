// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';


const HomeBanner = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}


            >
                <SwiperSlide>
                    <div id="slide1" className="carousel-item w-full">
                        <img src="https://images.pexels.com/photos/4693135/pexels-photo-4693135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-[60vh] md:h-[80vh] object-cover" />
                        <div className="flex flex-col justify-center items-center md:items-start pl-0 md:pl-32 absolute w-full bg-gradient-to-r from-slate-700 h-full">
                        <h3 className='text-2xl md:text-4xl text-center text-white font-bold mb-4'>Painting is just another way of keeping a diary.</h3>
                            <h3 className='text-sm md:text-xl text-center text-yellow-500 font-bold'>_Pablo Picasso</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide1" className="carousel-item w-full">
                        <img src="https://images.pexels.com/photos/7301922/pexels-photo-7301922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-[60vh] md:h-[80vh] object-cover" />
                        <div className="flex flex-col justify-center items-center md:items-start pl-0 md:pl-32 absolute w-full bg-gradient-to-r from-slate-700 h-full">
                            <h3 className='text-2xl md:text-4xl text-center text-white font-bold mb-4'>Every good painter paints what he is.</h3>
                            <h3 className='text-sm md:text-xl text-center text-yellow-500 font-bold'>_Jackson Pollock</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide1" className="carousel-item w-full">
                        <img src="https://images.pexels.com/photos/7859526/pexels-photo-7859526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-[60vh] md:h-[80vh] object-cover" />
                        <div className="flex flex-col justify-center items-center md:items-start pl-0 md:pl-32 absolute w-full bg-gradient-to-r from-slate-700 h-full">
                        <h3 className='text-2xl md:text-4xl text-center text-white font-bold mb-4'>Art is the stored honey of the human soul.</h3>
                        <h3 className='text-sm md:text-xl text-center text-yellow-500 font-bold'>_Theodore Dreiser</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide1" className="carousel-item w-full">
                        <img src="https://images.pexels.com/photos/1293006/pexels-photo-1293006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-[60vh] md:h-[80vh] object-cover" />
                        <div className="flex flex-col justify-center items-center md:items-start pl-0 md:pl-32 absolute w-full bg-gradient-to-r from-slate-700 h-full">
                        <h3 className='text-2xl md:text-4xl text-center text-white font-bold mb-4'>To be an artist is to believe in life.</h3>
                        <h3 className='text-sm md:text-xl text-center text-yellow-500 font-bold'>_Henry Moore</h3>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>

    );
};

export default HomeBanner;