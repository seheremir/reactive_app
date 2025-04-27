import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/colors';
import { Home, BookOpen, BarChart } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.card,
          borderTopColor: Colors.border,
        },
        headerStyle: {
          backgroundColor: Colors.card,
        },
        headerTitleStyle: {
          color: Colors.text,
          fontWeight: '600',
        },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Road Map",
          tabBarIcon: ({ color }) => <Home size={22} color={color} />,
          tabBarLabel: "Road Map",
        }}
      />
      <Tabs.Screen
        name="topics"
        options={{
          title: "All Topics",
          tabBarIcon: ({ color }) => <BookOpen size={22} color={color} />,
          tabBarLabel: "Topics",
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: "My Progress",
          tabBarIcon: ({ color }) => <BarChart size={22} color={color} />,
          tabBarLabel: "Progress",
        }}
      />
    </Tabs>
  );
}