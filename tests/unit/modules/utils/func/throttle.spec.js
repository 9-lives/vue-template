import { expect } from 'chai'
import { throttle } from 'utils/func/throttle'

describe('utils/throttle test suite', () => {
  it('expect to be a function', () => {
    expect(throttle).to.be.a('function')
  })

  it('expect to return a function', () => {
    expect(throttle({ callback: () => {} })).to.be.a('function')
  })
})
