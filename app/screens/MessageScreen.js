import { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import ListItemDeleteActions from '../components/ListItemDeleteActions'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (item) => {
    setMessages(messages.filter((message) => message.id !== item.id))
  }

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
            onPress={() => {}}
            renderRightActions={() => (
              <ListItemDeleteActions onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 4,
              title: 'Y4',
              description: 'Y4',
              image: require('../assets/jacket.jpg'),
            },
          ])
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})
