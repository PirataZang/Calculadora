import { View, Text } from 'react-native'
import React from 'react'
import DisplayCSS from './DisplayCSS'

export default function Display(props) {
  return (
    <View style={DisplayCSS.Display}>
      <Text style={DisplayCSS.DisplayValues} numberOfLines={1}>{props.value}</Text>
    </View>
  )
}