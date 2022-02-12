import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  detailContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  subtitle: {
    marginTop: 10,
    fontWeight: 'bold',
    color: colors.secondary,
  },
})
