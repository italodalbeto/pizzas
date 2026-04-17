import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function TabLayout() {
  return (
   <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#110d0d',
        headerStyle: {
          backgroundColor: '#063b09',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
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
    </Tabs> 
  );
}
