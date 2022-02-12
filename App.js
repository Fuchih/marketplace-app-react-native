import { View, Switch } from 'react-native'

import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import MessageScreen from './app/screens/MessageScreen'
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import AppTextInput from './app/components/AppTextInput'

import { useState } from 'react'
import AppPicker from './app/components/AppPicker'

export default function App() {
  const [isNew, setIsNew] = useState(false)

  return (
    <Screen>
      <AppPicker placeholder="Category" icon="apps" />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  )
}
