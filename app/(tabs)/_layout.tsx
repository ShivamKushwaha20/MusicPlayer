import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { colors, fontSize } from "../constants/tokens";

const TabsNavigation = () => {
  return (
    // navigation of main app

    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: "500",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen name="favourites" />
      <Tabs.Screen name="playlists" />
      {/* song navigation folder   */}
      <Tabs.Screen name="(songs)" />
      <Tabs.Screen name="artists" />
    </Tabs>
  );
};

export default TabsNavigation;
