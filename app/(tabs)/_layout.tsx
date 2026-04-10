import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs>
    <Tabs.Screen name="Index" options={{ title: 'Home' }} />
    <Tabs.Screen name="About" options={{ title: 'About' }} />
    </Tabs>
  );
}
