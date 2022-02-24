import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.text}>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
})
