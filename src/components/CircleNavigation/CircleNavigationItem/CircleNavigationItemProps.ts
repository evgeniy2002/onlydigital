import {  HTMLAttributes, MouseEvent } from "react"

export interface CircleNavigationItemProps extends HTMLAttributes<HTMLDivElement> {
  activeIndex?: number
  hoverIndex?: number
  label?: string
  circleItemIdx?: number

  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
} 