import React, { forwardRef } from 'react';

import s from './Header.module.scss';

export const Header: React.FC = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <header ref={ref} className={s.header} {...props}>
      <h1 className={s.header__title}>Исторические даты</h1>
    </header>
  );
});
