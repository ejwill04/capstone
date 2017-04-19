import React from 'react'
// import '../styles/index.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import { spy } from 'sinon'

// import App from '../app/components/App'
import CompanyProfile from '../app/components/CompanyProfile'
import ResultsList from '../app/components/ResultsList'

describe('ResultsList', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<ResultsList data={ { locations: [] } } />)
    assert.equal(wrapper.type(), 'div')
  })
})

describe('App', () => {
  xit('should render as a <div>', () => {
    const wrapper = shallow(<App />)
    assert.equal(wrapper.type(), 'div')
  })
})

describe('Company Profile', () => {
  xit('should render as a <div>', () => {
      const wrapper = shallow(<CompanyProfile />)
      assert.equal(wrapper.type(), <MuiThemeProvider />)
  })

  it('has has a state of companyData that is set to an empty object initially', () => {
    const wrapper = shallow(<CompanyProfile />)
    expect(wrapper.state('companyData')).to.be.an('object')
  })

  it('has a state of alumms that is an empty array by default', () => {
    const wrapper = shallow(<CompanyProfile />)
    expect(wrapper.state('alums')).to.be.an('array')
  })

  it('has a state of copany_id that is an empty string by default', () => {
    const wrapper = shallow(<CompanyProfile />)
    expect(wrapper.state('company_id')).to.be.a('string')
  })

  it('has a state of state that is an empty string by default', () => {
    const wrapper = shallow(<CompanyProfile />)
    expect(wrapper.state('state')).to.be.a('string')
  })

  it('has the ability to update alums state', () => {
    const wrapper = shallow(<CompanyProfile />)
    wrapper.setState({ alums: ['Charlie Brown'] })
    expect(wrapper.state('alums')).to.deep.equal(['Charlie Brown'])
    expect(wrapper.state('alums')).to.have.length(1)
  })

  it('has the ability to update the state of a state', () => {
    const wrapper = shallow(<CompanyProfile />)
    wrapper.setState({ state: 'WI' })
    expect(wrapper.state('state')).to.deep.equal('WI')
    expect(wrapper.state('state')).to.be.a('string')
  })
})

describe('Button', () => {
  it.skip('should have items props with a length of two', () => {
    const wrapper = mount(<MuiThemeProvider><RaisedButton items={['a','b']} /></MuiThemeProvider>)
    expect(wrapper.props().prop).to.equal("thing")
  })

  it.skip('allows us to set props', () => {
    const wrapper = mount(<Button prop="thing" />);
    expect(wrapper.props().prop).to.equal("thing");
    wrapper.setProps({ prop: "different-thing" });
    expect(wrapper.props().prop).to.equal("different-thing");
  })

  it.skip('should have a handleClick event', () => {
    const handleClick = sinon.spy()
    const wrapper = shallow(<Button handleClick={handleClick} />)
    wrapper.find('button').simulate('click');
    expect(handleClick.calledOnce).to.equal(true)
  })
})
