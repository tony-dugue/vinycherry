export const refNumber = 10

export const roles = ['Admin', 'Member'] as const
export const usersPerRole = 2

export const randomItem = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)]

export const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const randomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
