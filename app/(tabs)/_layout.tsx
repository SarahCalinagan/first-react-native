import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false,
      tabBarActiveTintColor: Colors.primary,}}>
      <Tabs.Screen name='nature-meditate'
        options={{ tabBarLabel: 'Medidtate',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
                name="flower"
                size={24}
                color={color}
            />),
        }}
      />
      <Tabs.Screen name='affirmations'
        options={{ tabBarLabel: 'Affirmations',
          tabBarIcon: ({ color }) => (
            <FontAwesome5
                name="book-open"
                size={24}
                color={color}
            />),
        }}
      />

    </Tabs>
  )
}

export default TabsLayout