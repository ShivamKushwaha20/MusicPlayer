import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/app/styles'

const SongScreen= () => {
  return (
    <View style={defaultStyles.container}>
        <Text style={defaultStyles.text}>
            Song list
        </Text>
    </View>
  )
}

export default SongScreen 