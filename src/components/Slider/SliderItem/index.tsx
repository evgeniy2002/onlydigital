import React, { forwardRef } from 'react';

import { SliderItemProps } from './SliderItemProps';

export const SliderItem = forwardRef<HTMLDivElement, SliderItemProps>(
  ({ className, children, title, text, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest} className={className}>
        {children}
      </div>
    );
  },
);
