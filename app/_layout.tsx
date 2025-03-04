import { ThemeProvider } from '@/context/theme.context'
import { SplashScreen, Stack } from 'expo-router'
import {
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
  useFonts,
} from '@expo-google-fonts/poppins'

// Prevent the splash screen from auto-hiding before assets loading is complete
// SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
  })
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='(routes)/onboarding/index' />
      </Stack>
    </ThemeProvider>
  )
}
