import React  from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary:  {
    color: theme.colors.textPrimary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
   subHeading: {
    fontSize: theme.fontWeights.subHeading
  }
})

export default function StyledText({children, color, fontSize, fontWeight, style, ...restOfProps }) {
 const textStyles = [
   styles.text,
   color === 'primary' && styles.colorPrymary,
   color === 'secondary' && styles.colorSecondary,
   fontSize === 'subHeading' && styles.subHeading,
   fontWeight === 'bold' && styles.bold

 ]

return (
  <Text style={textStyles} {...restOfProps}>{children}</Text>
)
}
