import React from 'react'
import {render} from 'react-dom'
import App from './Components/App'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

import './index.css'
import myTheme from './theme'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
    <App />
  </MuiThemeProvider>
);

render(<Main/>, document.getElementById('root'))
