import React from 'react';
import './Main.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Main = ({ setIsModalOpen }) => {
    return (
        <main className='main'>
            <h2>
                Отож, нарешті вихідний 🙂
            </h2>
            <h2 className='main__title'>
                Що робитимемо сьогодні?
            </h2>

            <div className='main__wrapper'>

                <Swiper
                    spaceBetween={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className='swiper'
                >
                    <SwiperSlide
                        className='swiper__slide'
                    >
                        <div className='swiper__slide-box'>
                            <span className='swiper__slide-text'>Погуляємо по парку 🍁🍂</span>
                            <button
                                onClick={() => setIsModalOpen(true)}
                            >Обрати</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className='swiper__slide'
                    >
                        <div className='swiper__slide-box'>
                            <span className='swiper__slide-text'>Поплануємо бізнес питаннячка 🧙‍♂️💰</span>
                            <button>Обрати</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className='swiper__slide'
                    >
                        <div className='swiper__slide-box'>
                            <span className='swiper__slide-text'>Займемося айтішкою 👨‍💻🧩</span>
                            <button>Обрати</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className='swiper__slide'
                    >
                        <div className='swiper__slide-box'>
                            <span className='swiper__slide-text'>Покатаємося велосипедом 🚴‍♀️🥶</span>
                            <button>Обрати</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className='swiper__slide'
                    >
                        <div className='swiper__slide-box'>
                            <span className='swiper__slide-text'>Поїмо смачненького 🍣🍩</span>
                            <button>Обрати</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className='swiper__slide'
                    >
                        <div className='swiper__slide-box'>
                            <span className='swiper__slide-text'>З'їздимо в Мощун до бабусі 👵❤️</span>
                            <button>Обрати</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className='swiper__slide'
                    >
                        <div className='swiper__slide-box'>
                            <span className='swiper__slide-text'>Пограємо в шахи ♟️🤏</span>
                            <button>Обрати</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className='swiper__slide'
                    >
                        <div className='swiper__slide-box'>
                            <span className='swiper__slide-text'>Подивимось серіал офіс 👨‍💼🍿</span>
                            <button>Обрати</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </main>
    )
}