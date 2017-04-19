import React from 'react'
// import '../styles/index.scss'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import { spy } from 'sinon'

import ResultsList from '../app/components/ResultsList'

describe('ResultsList', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<ResultsList data={ { locations: [] } } />)
    assert.equal(wrapper.type(), 'div')
  })
})
