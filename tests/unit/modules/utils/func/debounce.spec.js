import { expect } from 'chai'
import { debounce } from 'utils/func/debounce'

describe('utils/debounce test suite', () => {
  it('expect to be a function', () => {
    expect(debounce).to.be.a('function')
  })

  it('expect to return a function', () => {
    expect(debounce({ callback: () => {} })).to.be.a('function')
  })
})
