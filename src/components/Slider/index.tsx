import React, { HTMLAttributes, useLayoutEffect } from 'react';

import { SliderItemProps } from './SliderItem/SliderItemProps';
import { SliderItem } from './SliderItem';

import s from './Slider.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import gsap from 'gsap';

type Props = {
  data: SliderItemProps[];
} & HTMLAttributes<HTMLDivElement>;

export const Slider: React.FC<Props> = ({ data }) => {
  const swiperRef = React.useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(swiperRef.current, {
        opacity: 0,
        delay: 1,
        duration: 0.5,
      });
    });

    return () => ctx.revert();
  });

  return (
    <Swiper
      className="mySwiper"
      slidesPerView={3}
      spaceBetween={80}
      modules={[Pagination, Navigation]}
      navigation={true}
      watchOverflow={true}
      ref={swiperRef}
      breakpoints={{
        320: {
          slidesPerView: 2,
          // spaceBetween: 0,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1023: {
          slidesPerView: 3,
          // spaceBetween: 0,
        },
      }}>
      {data.length > 0 &&
        data.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderItem>
              <div className={s.slider__item__row}>
                <h1 className={s.slider__item__row__title}>{item.date}</h1>
                <p className={s.slider__item__row__text}>{item.text}</p>
              </div>
            </SliderItem>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
