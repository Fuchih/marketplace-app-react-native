import { StyleSheet, SafeAreaView } from 'react-native'
import constants from 'expo-constants'
import { Children } from 'react/cjs/react.production.min'

export default function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: constants.statusBarHeight,
  },
})
