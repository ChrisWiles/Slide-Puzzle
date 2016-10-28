/* eslint-disable */
import {fade} from 'material-ui/utils/colorManipulator'
// http://www.material-ui.com/#/customization/colors
// https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js

import {
  blue400,
  teal400,
  lightBlack,
  pinkA200,
  grey100,
  grey500,
  darkBlack,
  white,
  grey300,
  blue500,
  blueGrey900,
  grey900,
  lightBlue500
} from 'material-ui/styles/colors'

export default {
  fontFamily : 'Roboto, sans-serif',
  palette : {
    primary1Color: blue400,
    primary2Color: teal400,
    primary3Color: darkBlack,
    accent1Color: pinkA200,
    accent2Color: lightBlue500,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blue500
  }
}
