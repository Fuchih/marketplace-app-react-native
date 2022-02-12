import { StyleSheet, FlatList, View } from 'react-native'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'T1',
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'D2',
    description: 'D2',
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 3,
    title: 'A3',
    description: 'A3',
    image: require('../assets/jacket.jpg'),
  },
]

export default function MessageScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => alert('HI')}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})
