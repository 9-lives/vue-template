import {
  expect
} from 'chai'
import {
  deepFreeze
} from 'utils/object/deepFreeze'

describe('utils/deepFreeze test suite', () => {
  it('expect to be frozen', () => {
    expect(deepFreeze({})).to.be.frozen
  })

  it('expect to be deep frozen', () => {
    const o = deepFreeze({
      a: 0,
      b: {
        ba: 0,
        bb: {},
      },
    })

    recursiveExpect(o)
  })
})

function recursiveExpect(o) {
  if (typeof o === 'object' && o !== null) {
    expect(o).to.be.frozen

    for (let p of Object.values(o)) {
      recursiveExpect(p)
    }
  }
}
