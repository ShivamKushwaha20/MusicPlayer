import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/app/styles';
import { Stack } from 'expo-router';

const artistScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
        <Stack>
            <Stack.Screen 
            name = "index"
            options={{
                headerTitle: 'artists',
            }}
            />
        </Stack>
    </View>
  )
}

export default artistScreenLayout ;