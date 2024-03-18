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
  activeLabel?: string | undefined;
} & HTMLAttributes<HTMLDivElement>;

export const Slider: React.FC<Props> = ({ data, activeLabel }) => {
  const swiperRef = React.useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(swiperRef.current, {
        opacity: 0,
        y: 20,
        delay: 1,
        duration: 0.5,
      });
    });

    return () => ctx.revert();
  });

  return (
    <>
      <Swiper
        className="mySwiper"
        modules={[Pagination, Navigation]}
        grabCursor={true}
        navigation={true}
        initialSlide={0}
        watchOverflow={true}
        ref={swiperRef}
        data-label={activeLabel}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            centeredSlidesBounds: true,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1023: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}>
        {data.length > 0 &&
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <SliderItem {...item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
