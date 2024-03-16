export type CircleDataProps = {
  id: number,
  dateRange: number[],
  label?: string
}


export type CircleProps = {
  activeIndex: number,
  data: CircleDataProps[]
}