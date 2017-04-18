import React from 'react'
// import '../styles/index.scss'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import { spy } from 'sinon'

import App from '../app/components/App'

describe('App', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<App />)
    assert.equal(wrapper.type(), 'div')
  })
})
