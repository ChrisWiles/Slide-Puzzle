import React, {Component} from 'react'
import {render} from 'react-dom'
import App from './Components/App'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './index.css'
import light from './themeDefault'
import dark from './themeDark'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

class Main extends Component {
  state = {
    theme: light
  }

  toggleTheme = () => {
    const {theme} = this.state

    if(theme === light) {
      this.setState({theme: dark})
      document.getElementById("root").style.backgroundColor = '#181818'
    } else {
      this.setState({theme: light})
      document.getElementById("root").style.backgroundColor = '#FAFAFA'
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(this.state.theme)}>
        <App toggleTheme={this.toggleTheme}/>
      </MuiThemeProvider>
    )
  }
}


render(<Main/>, document.getElementById('root'))
