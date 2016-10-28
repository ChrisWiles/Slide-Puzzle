/* eslint-disable */
import {fade} from 'material-ui/utils/colorManipulator'
// http://www.material-ui.com/#/customization/colors

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
  pinkA200,
  darkBlack,
  fullBlack
} from 'material-ui/styles/colors'

export default {
  fontFamily : 'Roboto, sans-serif',
  palette : {
    primary1Color: white,
    primary2Color: white,
    primary3Color: white,
    primary4Color: white,
    footerColor: white,
    accent1Color: purple500,
    accent2Color: darkBlack,
    accent3Color: darkBlack,
    backgroundColor: darkBlack,
    textColor: white,
    alternateTextColor: white,
    canvasColor: darkBlack,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: purple500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: white
  }
}
