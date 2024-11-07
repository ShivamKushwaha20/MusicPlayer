import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/app/styles'

const FavouritesScreen= () => {
  return (
    <View style={defaultStyles.container}>
        <Text style={defaultStyles.text}>
            Favourites
        </Text>
    </View>
  )
}

export default FavouritesScreen