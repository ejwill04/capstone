import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider form 'material-ui/stles/MuiThemeProvider'
import AwesomeButtonComponent from './AwesomeButtonComponent'

const App = () => {
  <MuiThemeProvider>
    <AwesomeButtonComponent />
  </MuiThemeProvider>
}

ReactDOM.render(
  <App />
  document.getElementById('app')
)
