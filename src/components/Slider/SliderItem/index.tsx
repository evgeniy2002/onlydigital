import React, { forwardRef } from 'react';

import s from './SliderItem.module.scss';

import { SliderItemProps } from './SliderItemProps';
import classNames from 'classnames';

export const SliderItem = forwardRef<HTMLDivElement, SliderItemProps>(
  ({ className, children, date, text, ...rest }, ref) => {
    className = classNames(s.slider__item, className);

    return (
      <div ref={ref} {...rest} className={className}>
        <h1 className={s.slider__item__title}>{date}</h1>
        <p className={s.slider__item__text}>{text}</p>
      </div>
    );
  },
);
