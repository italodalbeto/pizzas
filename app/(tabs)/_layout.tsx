import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
   <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffffd3',
        headerStyle: {
          backgroundColor: '#063b09',
        },
        headerShadowVisible: false,
        headerTintColor: '#fffefe',
        tabBarStyle: {
          backgroundColor: '#000000',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Pizzas',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'pizza' : 'pizza-outline'} color={color} size={24} />
        ),
     }}
   />
       <Tabs.Screen
       name= "about"
       options={{
        title: 'Cardápio',
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons name={focused ? 'menu-open' : 'menu-close'} color={color} size={24}/>
         ),
       }}
      />
       <Tabs.Screen
       name= "toDoList"
       options={{
        title: 'Pizzas Favoritas',
        tabBarIcon: ({ color, focused }) => (
          <AntDesign name={focused ? 'caret-left' : 'caret-right'} color={color} size={24}/>
         ),
       }}
      />
    </Tabs> 
  );
}
