import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native'
import colors from '../config/colors'

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/background.jpg')}
        resizeMode="cover"
      >
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.text}>sell what you don't need</Text>
      </ImageBackground>
      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 70,
  },
  text: {
    textTransform: 'capitalize',
  },
  loginBtn: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerBtn: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
})

export default WelcomeScreen
