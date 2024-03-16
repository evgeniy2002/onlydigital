import React, { LegacyRef, MutableRefObject, forwardRef, useLayoutEffect } from 'react';

import s from './CircleNavigation.module.scss';
import { CircleNavigationItem } from './CircleNavigationItem';
import { useAppDispatch } from '../../redux/hook';
import { incrementActiveIndex } from '../../redux/circle/slice';
import { CircleDataProps } from '../../redux/circle/types';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);
export const CircleNavigation = ({
  activeIndex,
  activeLabel,
  navigationData,
  ...rest
}: {
  activeIndex?: number;
  activeLabel?: string;
  navigationData: CircleDataProps[];
}) => {
  // let tween: GSAPTimeline;

  // const itemsRefs = React.useRef<Array<React.RefObject<HTMLDivElement>>>(
  //   Array(6)
  //     .fill(null)
  //     .map(() => React.createRef()),
  // );

  const circle = React.useRef<HTMLDivElement>(null);
  // const tl = React.useRef<GSAPTimeline | null>(null);

  const dispatch = useAppDispatch();

  const [hoverIndex, setHoverIndex] = React.useState(0);

  const setActiveIndex = (index: number) => {
    dispatch(incrementActiveIndex(index));
    setHoverIndex(0);
  };

  const { contextSafe } = useGSAP();

  const rotateCircle = contextSafe((i: number) => {
    gsap.to(circle.current, {
      rotation: (360 / -6) * i + 120,
      duration: 1.5,
    });
  });

  React.useEffect(() => {
    if (activeIndex) {
      rotateCircle(activeIndex);
    }
  }, [activeIndex]);

  return (
    <>
      <div ref={circle} className={s.circle} {...rest}>
        <div className={s.circle__content}>
          {navigationData.map((item, index) => (
            <CircleNavigationItem
              circleItemIdx={item.id}
              activeIndex={activeIndex}
              key={index}
              onMouseEnter={() => setHoverIndex(item.id)}
              onMouseLeave={() => setHoverIndex(0)}
              hoverIndex={hoverIndex}
              onClick={() => {
                setActiveIndex(item.id);
                rotateCircle(item.id);
              }}
              label={activeLabel}
            />
          ))}
        </div>
      </div>
    </>
  );
};
