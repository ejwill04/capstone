import React from 'react'
import CityList from './CityList'


export default class ResultsList extends React.Component {

render() {
  return(
    <div className='results-container'>
      <CityList companyDetail={this.props.companyDetail}/>
      <CityList />
      <CityList />
    </div>
  )
}
}
