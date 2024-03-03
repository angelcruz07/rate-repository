import { StyleSheet, View, TouchableWithoutFeedback, ScrollView } from 'react-native'
import StyledText from './StyledText'
import theme from '../theme'
import Constants from 'expo-constants'
import { Link, useLocation } from 'react-router-native'

//Styles to AppBar
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  scroll: {
    paddingBottom: 15,
  },
  active: {
    color: theme.appBar.primaryText
  }
})

const AppBarTab =  ({ children, to }) => {
  const { pathName } = useLocation()
  // If pathName = to else activate
  const active = pathName === to
  // Styles if active
  const textStyles = [
    styles.text,
    active && styles.active
  ]
  // Component link for AppBar
  return (
    <Link to={to} component={TouchableWithoutFeedback} >
      <StyledText fontWeight='bold' style={textStyles} >
        { children }
      </StyledText>
    </Link>
  )
}

// Component of  AppBar, display menu from application
const AppBar= () => {
 return (
   <View style={styles.container} styles={styles.scroll}>
     <ScrollView horizontal >
       <AppBarTab  to="/"> Repositories </AppBarTab>
       <AppBarTab  to="/signin"> Sign In </AppBarTab>
     </ScrollView>
   </View>
 )
}


export default  AppBar
