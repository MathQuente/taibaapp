/* eslint-disable prettier/prettier */

import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.

  initialRouteName: 'index',
};

export default function EventsLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="eventDetails" options={{ headerShown: false }} />
    </Stack>
  );
}
