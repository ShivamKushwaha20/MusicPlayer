import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsNavigation = () => {
  return (
    // navigation of main app
    
    <Tabs>
        <Tabs.Screen name="favourites"/>
        <Tabs.Screen name="playlists"/>
        {/* song navigation folder   */}
        <Tabs.Screen name="(songs)"/> 
        <Tabs.Screen name="artists"/>
    </Tabs>
  )
}

export default TabsNavigation 