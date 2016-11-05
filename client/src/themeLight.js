/* eslint-disable */
import {Spacing, zIndex} from 'material-ui'
import {fade} from 'material-ui/utils/colorManipulator'
// http://www.material-ui.com/#/customization/colors
// https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js

import {
  purple500,
  purple600,
  purple800,
  purple900,
  lightBlueA200,
  blueGrey50,
  blueGrey800,
  blueGrey900,
  grey100,
  grey300,
  grey400,
  grey500,
  grey900,
  white,
  darkBlack,
  fullBlack
} from 'material-ui/styles/colors'

export default {
  spacing : Spacing,
  fontFamily : 'Roboto, sans-serif',
  palette : {
    primary1Color: blueGrey800,
    primary2Color: blueGrey900,
    primary3Color: grey400,
    primary4Color: blueGrey50,
    footerColor: blueGrey900,
    accent1Color: lightBlueA200,
    accent2Color: grey100,
    accent3Color: grey500,
    backgroundColor: grey900,
    textColor: blueGrey800,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: purple500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
}
