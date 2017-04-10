import React, { Component } from 'react'
import CityList from './CityList'


export default class ResultsList extends Component {
  constructor() {
    super()
    this.state = {
      companyData: []
    }
  }
  render() {
    console.log(this.props.data.companies)
    // this.setState({ companyData: this.props.data.compan})
      let list = this.props.data.locations ? this.props.data.locations.map((el) => {
        return <CityList key={el.id} city={el.city} company_id={el.company_id} />
      }) : null

      return(
        <div className='results-container'>
        <div>{list}</div>
      </div>
      )

  }
}




// const ResultsList = ({ data }) => {
//
// const list = (data) => {
//   if (data.locations) {
//       data.locations.map((el) => {
//         console.log('el.city?,...........', el.city)
//          return (
//              <p>{el.city}</p>
//          )
//        })
//     }
//   }
//
//   return (
//     <div className='results-container'>
//       <p>{list(data)}</p>
//     </div>
//   )
// }
//
// export default ResultsList
