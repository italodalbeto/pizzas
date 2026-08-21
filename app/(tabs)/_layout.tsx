import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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
          <MaterialIcons name={focused ? 'favorite' : 'favorite-border'} color={color} size={24}/>
         ),
       }}
      />
      <Tabs.Screen
       name= "buscaCep"
       options={{
        title: 'Busca Pizzaria',
        tabBarIcon: ({ color, focused }) => (
          <Entypo name={focused ? 'location' : 'location-pin'} color={color} size={24}/>
         ),
       }}
      />
      <Tabs.Screen
       name= "editImage"
       options={{
        title: 'editImage',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'camera' : 'camera-outline'} color={color} size={24}/>
         ),
       }}
      />


    </Tabs> 
  );
}
