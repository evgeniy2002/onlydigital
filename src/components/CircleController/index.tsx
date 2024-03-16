import React, { forwardRef, useCallback } from 'react';

import arrow from '../../assets/arrow.svg';

import s from './CircleController.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { decrementActiveIndex, incrementActiveIndex } from '../../redux/circle/slice';
import classNames from 'classnames';
import { CircleControllerProps } from './CircleControllerProps';

const DefaultButton = forwardRef<HTMLButtonElement, CircleControllerProps>(
  ({ children, disabled, ...rest }, ref) => {
    const elementClassName = classNames({
      [s.controller__disabled]: disabled,
    });

    return (
      <button ref={ref} className={elementClassName} {...rest}>
        {children}
      </button>
    );
  },
);

export const CircleController = forwardRef<HTMLDivElement, { circleDataLength: number }>(
  ({ circleDataLength, ...rest }, ref) => {
    const { activeIndex } = useAppSelector((state) => state.cirle);

    const dispatch = useAppDispatch();

    const incrementIndex = () => {
      dispatch(incrementActiveIndex(activeIndex + 1));
    };

    const decrementIndex = () => {
      dispatch(decrementActiveIndex(activeIndex - 1));
    };

    return (
      <div className={s.controller} ref={ref} {...rest}>
        <div className={s.controller__pagination}>
          <span>0{activeIndex}</span>/<span>0{circleDataLength}</span>
        </div>
        <div className={s.controller__button}>
          <DefaultButton onClick={decrementIndex} disabled={activeIndex === 1}>
            <img src={arrow} alt="arrow left" />
          </DefaultButton>
          <DefaultButton onClick={incrementIndex} disabled={activeIndex === 6}>
            <img src={arrow} alt="arrow left" />
          </DefaultButton>
        </div>
      </div>
    );
  },
);
