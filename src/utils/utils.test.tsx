import { getDivisiblesByThree } from './index'

describe('Get divisibles by 3', () => {
  test('test negative numbers, should return 3', () => {
    const a = -9
    const b = -3
    expect(getDivisiblesByThree(a, b)).toEqual(3)
  })
  test('positive and negative values, should return 2, including a negative and zero', () => {
    const a = -4
    const b = 2
    expect(getDivisiblesByThree(a, b)).toEqual(2)
  })
  test('one is negative, should return 3', () => {
    const a = -1
    const b = 6
    expect(getDivisiblesByThree(a, b)).toEqual(3)
  })
  test('should return 1', () => {
    const a = 4
    const b = 6
    expect(getDivisiblesByThree(a, b)).toEqual(1)
  })

  test('first number is higher, should work fine and return 4', () => {
    const a = 10
    const b = 0
    expect(getDivisiblesByThree(a, b)).toEqual(4)
  })
})
