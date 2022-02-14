import { View, Switch } from 'react-native'

import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import MessageScreen from './app/screens/MessageScreen'
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'
import { useState } from 'react'
import LoginScreen from './app/components/LoginScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'

export default function App() {
  return <ListingEditScreen />
}
