import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native'
import colors from '../config/colors'

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        source={require('../assets/chair.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.black,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
