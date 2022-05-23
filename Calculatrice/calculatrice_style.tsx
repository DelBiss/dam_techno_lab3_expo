import { StyleSheet, ViewStyle } from 'react-native';


////////////////////////////////////////////////////////////////////////////////
// VISUAL
////////////////////////////////////////////////////////////////////////////////

const color:StyleSheet.NamedStyles<any> = {
  app: {        backgroundColor:  '#5e5e5e'},
  ui: {         backgroundColor:  '#f0f0f0'},
  ui_border: {  borderColor:      '#404040'},
  shadow: {     shadowColor:      '#000000'},
}

const buttonsize:StyleSheet.NamedStyles<any> = {
  regularSize: {  width: '21%' },
  largeSize: {    width: '46%' },
}

const text:StyleSheet.NamedStyles<any> = {
  expression : {
    fontSize: 15,
    textAlign: 'right',
  },
  result : {
    fontSize: 50,
    textAlign: 'right',
  },
  button : {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}

const border:ViewStyle = {
  borderRadius: 10,
  borderWidth: 2,
  ...color.ui_border,
}

const ui_shadow:ViewStyle= {
  shadowRadius: 3,
  shadowOffset: {height:1, width:1},
  ...color.shadow,
}

////////////////////////////////////////////////////////////////////////////////
// LAYOUT
////////////////////////////////////////////////////////////////////////////////

const spacing:StyleSheet.NamedStyles<any> = {
  ui: { padding: 10 },
  screen: {
    marginTop: 30,
    marginHorizontal: 10,
  },
  buttonBox: {
    padding: 5,
  },
  button:{
    margin:"2%",
  }
}

const alignement:ViewStyle = {
  justifyContent: 'center',
  alignContent: "stretch",
}

const flex:StyleSheet.NamedStyles<any> = {
  column: {
    flexDirection: 'column',
    flex: 1,
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
    flexWrap: "wrap",
  },
}

////////////////////////////////////////////////////////////////////////////////
// BASE ELEMENT
////////////////////////////////////////////////////////////////////////////////

const ui_element:ViewStyle = {
  ...color.ui,
  ...border,
  ...spacing.ui,
}

const button:ViewStyle = {
  ...alignement,
  ...spacing.button,
  ...ui_element,
  ...ui_shadow,
  ...text.button,
}

////////////////////////////////////////////////////////////////////////////////
// STYLE COMPOSITION
////////////////////////////////////////////////////////////////////////////////

export const styles = StyleSheet.create({
  app:{
    ...flex.column,
  },
  calcScreen: {
      ...alignement,
      ...spacing.screen,
      ...ui_element,
  },
  
  calcScreen_result:  text.result,
  calcScreen_expression: text.expression,
  
  calcWrapper: {
      ...flex.column,
      ...color.app
  },

  calcButtonBox: {
      ...flex.row,
      ...alignement,
      ...spacing.buttonBox
  },
  calcButton: {
      ...buttonsize.regularSize,
      ...button,    
  },
  calcButton_total: {
      ...buttonsize.largeSize,
      ...button,
  },
  calcButton_text:{
      ...text.button
  },

})