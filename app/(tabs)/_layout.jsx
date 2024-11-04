import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
// import {Provider} from 'react-redux'
// import { store } from '../../store'

export default function TabLayout() {
  return (
    // <Provider store={store}>
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' />
        <Stack.Screen name='hotel' />
    </Stack>
    // </Provider>
  )
}