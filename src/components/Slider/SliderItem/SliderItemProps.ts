import { HTMLAttributes } from 'react';
export interface SliderItemProps extends HTMLAttributes<HTMLDivElement>{
  date?: number,
  text?: string
}