import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/app/styles';
import { Stack } from 'expo-router';

const PlaylistScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
        <Stack>
            <Stack.Screen 
            name = "index"
            options={{
                headerTitle: 'Playlist',
            }}
            />
        </Stack>
    </View>
  )
}

export default PlaylistScreenLayout  ;