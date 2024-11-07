import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/app/styles'

const PlaylistScreen= () => {
  return (
    <View style={defaultStyles.container}>
        <Text style={defaultStyles.text}>
            playlist
        </Text>
    </View>
  )
}

export default PlaylistScreen