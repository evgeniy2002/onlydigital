import React, { useCallback } from 'react';
import { CircleNavigation } from '../CircleNavigation';
import { DateRange } from '../DateRange';
import { Slider } from '../Slider';
import { CircleController } from '../CircleController';
import { useAppSelector } from '../../redux/hook';

export const Content = () => {
  const { activeIndex, data: navigationData } = useAppSelector((state) => state.cirle);
  const [dateRange, setDateRange] = React.useState<number[]>([]);
  const [historyData, setHistoryDate] = React.useState([]);
  const [activeLabel, setActiveLabel] = React.useState<string | undefined>('');

  React.useEffect(() => {
    const fetchHistory = async () => {
      const res = await fetch(
        `https://65f45837f54db27bc02176f4.mockapi.io/articles?id=${activeIndex}`,
      );
      const data = await res.json();
      setHistoryDate(data[0].history);
    };

    fetchHistory().catch((err) => console.log(err));
  }, [activeIndex]);

  React.useEffect(() => {
    if (activeIndex && navigationData.length > 0) {
      const currentItem = navigationData.find((el) => el.id === activeIndex);
      if (currentItem) {
        setDateRange(currentItem.dateRange);
        setActiveLabel(currentItem.label);
      }
    }
  }, [activeIndex, navigationData]);

  return (
    <main>
      <CircleNavigation
        activeIndex={activeIndex}
        navigationData={navigationData}
        activeLabel={activeLabel}
      />

      <DateRange dateRange={dateRange} activeIndex={activeIndex} />
      {window.innerWidth < 500 ? <span className="mobile__label">{activeLabel}</span> : null}

      <CircleController circleDataLength={navigationData.length} />
      <Slider data={historyData} />
    </main>
  );
};
