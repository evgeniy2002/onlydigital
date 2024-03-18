import React, { forwardRef } from 'react';

import s from './DataRange.module.scss';

export const DateRange = forwardRef<HTMLDivElement, { dateRange: number[]; activeIndex: number }>(
  ({ dateRange, activeIndex, ...rest }, ref) => {
    const [oldDate, setOldDate] = React.useState<number | null>(null);
    const [currentDate, setCurrentDate] = React.useState<number | null>(null);

    const updateCounter = (
      rangeCount: number | null,
      count: number | null,
      fn: (value: number) => void,
    ) => {
      if (count && rangeCount) {
        let currentValue = count;

        if (currentValue === rangeCount) {
          return;
        }

        const interval = setInterval(() => {
          currentValue += 1;

          fn(currentValue);
          if (currentValue >= rangeCount) {
            clearInterval(interval);
          }
        }, 100);
      }
    };

    React.useEffect(() => {
      const diffNumber = Math.abs(dateRange[0] - dateRange[1]);
      setOldDate(dateRange[0] - diffNumber);
      setCurrentDate(dateRange[1] - diffNumber);
    }, [dateRange]);

    React.useEffect(() => {
      updateCounter(dateRange[0], oldDate, setOldDate);
      updateCounter(dateRange[1], currentDate, setCurrentDate);
    }, [oldDate, currentDate]);

    return (
      <div ref={ref} className={s.date} {...rest}>
        <div className={s.date__content}>
          {oldDate && currentDate ? (
            <>
              <span>{oldDate}</span>
              <span>{currentDate}</span>
            </>
          ) : null}
        </div>
      </div>
    );
  },
);
