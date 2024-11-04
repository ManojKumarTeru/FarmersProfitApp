import { Stack } from "expo-router";
import "../global.css"

export default function RootLayout() {
  return (
    //Hi just for testing
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
