import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import svgIcon from 'ui/components/svgIcon/index.vue'

describe('components/base/svgIcon.vue', () => {
  const wrapper = mount(svgIcon, {
    propsData: {
      name: 'test',
    },
  })

  it('renders <svg></svg>', () => {
    expect(wrapper.is('svg')).to.equal(true)
    expect(wrapper.attributes('aria-hidden')).to.equal('true')
  })
  it('renders <use></use>', () => {
    const use = wrapper.find('use')

    expect(use.is('use')).to.equal(true)
    expect(use.attributes('href')).to.equal('#ic-test')
  })
})
