import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TopBar from './TopBar'
import TheBoard from './TheBoard'
import ButtonFrame from './ButtonFrame'

import './App.css'

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TopBar/>
          <TheBoard/>
          <ButtonFrame/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
