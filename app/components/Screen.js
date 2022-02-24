import { StyleSheet, SafeAreaView, View } from 'react-native'
import constants from 'expo-constants'

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
})
