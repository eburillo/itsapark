import { range } from 'ramda'

export function getDivisiblesByThree(a: number, b: number): number {
  let divisibles = 0
  const secuence = createSecuence(a, b)
  secuence.forEach((n) => n % 3 === 0 && divisibles++)

  return divisibles
}

function createSecuence(a: number, b: number): Array<number> {
  const highEnd = Math.max(a, b)
  const lowEnd = highEnd === b ? a : b
  return range(lowEnd, highEnd + 1) // fix for the 'exclusive' setting on the highest value
}
