import React, { Children, forwardRef, useLayoutEffect } from 'react';

import s from './CircleNavigationItem.module.scss';

import classNames from 'classnames';
import { CircleNavigationItemProps } from './CircleNavigationItemProps';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export const CircleNavigationItem = forwardRef<HTMLDivElement, CircleNavigationItemProps>(
  ({ children, label, className, circleItemIdx, hoverIndex, activeIndex, ...rest }, ref) => {
    const isActivePoint = activeIndex === circleItemIdx || hoverIndex === circleItemIdx;

    const { contextSafe } = useGSAP();
    const pointRef = React.useRef<HTMLDivElement>(null);
    const labelRef = React.useRef<HTMLDivElement>(null);

    const rotateCircleItem = contextSafe(() => {
      gsap.to(pointRef.current, {
        rotation: -120,
      });
    });

    React.useEffect(() => {
      if (isActivePoint && activeIndex) {
        rotateCircleItem();
      }
    }, [activeIndex]);

    const handleLableView = contextSafe(() => {
      gsap.from(labelRef.current, {
        opacity: 0,
        delay: 1.5,
        duration: 0.5,
      });
    });

    React.useEffect(() => {
      if (label && activeIndex) {
        handleLableView();
      }
    }, [activeIndex]);

    const pointClassName = classNames(s.circle__item__point, {
      [s.circle__item__point__active]: isActivePoint,
    });
    return (
      <div
        className={s.circle__item}
        style={{ ['--i' as string]: circleItemIdx }}
        ref={ref}
        {...rest}>
        <div className={pointClassName} ref={pointRef}>
          {isActivePoint && <span>{circleItemIdx}</span>}

          {label?.length && activeIndex === circleItemIdx && (
            <>
              <span className={s.circle__item__point__label} ref={labelRef}>
                {label}
              </span>
            </>
          )}
        </div>
      </div>
    );
  },
);
