import { AppHeader } from '@/components/AppHeader';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(apps)',
};

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          header: () => <AppHeader />,
        }}
      >
        <Stack.Screen name="(app)" options={{}} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
