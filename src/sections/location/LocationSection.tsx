import type { FC } from "react";
import where from "/where.png";
import atmosphere from "/atmosphere.svg";
import lagomImg1 from "/carusel/1.jpg";
import lagomImg2 from "/carusel/2.png";
import lagomImg3 from "/carusel/3.jpg";
import lagomImg4 from "/carusel/4.png";
import lagomImg5 from "/carusel/5.png";
import lagomImg6 from "/carusel/6.webp";
import lagomImg7 from "/carusel/7.jpeg";
import lagomImg8 from "/carusel/8.jpeg";
import "./styles.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';

export const LocationSection: FC = () => {
    return (
        <section className="location">
            <div className="location__container">
                <div className="location__header">
                    <div className="location__header-container">
                        <h2 className="location__title">
                            КОГДА МЫ РАЗМЫШЛЯЛИ О ТОМ, КАК ОТМЕТИТЬ НАШУ СВАДЬБУ, ПОНЯЛИ, ЧТО МЕЧТАЕМ ПРОВЕСТИ ЭТО ВРЕМЯ
                            В КРУГУ САМЫХ БЛИЗКИХ НАМ ЛЮДЕЙ
                        </h2>
                        <span className="crossed">Но потом передумали и решили с вами</span>
                        <span className="location__subtitle">в лесу</span>
                    </div>
                </div>
                <div className="location__container">
                    <div className="envelope">
                        <img src={where} alt="where" />
                        <a href="https://yandex.ru/maps/-/CHGyuAM9" className="route" target="_blank">
                            Маршрут
                        </a>
                    </div>
                </div>
                <img src={atmosphere} alt="atmosphere" className="atmosphere" />
            </div>
            <div className="slider">
                <Swiper
                    spaceBetween={5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.5,
                        },

                        768: {
                            slidesPerView: 3,
                        },

                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide><img src={lagomImg1} alt="img" className="slider__slide-img" /></SwiperSlide>
                    <SwiperSlide><img src={lagomImg2} alt="img" className="slider__slide-img" /></SwiperSlide>
                    <SwiperSlide><img src={lagomImg3} alt="img" className="slider__slide-img" /></SwiperSlide>
                    <SwiperSlide><img src={lagomImg4} alt="img" className="slider__slide-img" /></SwiperSlide>
                    <SwiperSlide><img src={lagomImg5} alt="img" className="slider__slide-img" /></SwiperSlide>
                    <SwiperSlide><img src={lagomImg6} alt="img" className="slider__slide-img" /></SwiperSlide>
                    <SwiperSlide><img src={lagomImg7} alt="img" className="slider__slide-img" /></SwiperSlide>
                    <SwiperSlide><img src={lagomImg8} alt="img" className="slider__slide-img" /></SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}