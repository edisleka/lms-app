import { fontSizes, windowHeight, windowWidth } from '@/themes/app.constant'
import { BlurView } from 'expo-blur'
import { Text, Pressable, View, Image } from 'react-native'

export default function AuthModal() {
  return (
    <BlurView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Pressable
        style={{
          width: windowWidth(420),
          height: windowHeight(250),
          marginHorizontal: windowWidth(50),
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={(e) => e.stopPropagation()}
      >
        <Text
          style={{
            fontSize: fontSizes.FONT35,
            fontFamily: 'Poopins_700Bold',
          }}
        >
          Join to Becodemy
        </Text>
        <Text
          style={{
            fontSize: fontSizes.FONT17,
            fontFamily: 'Poopins_300Light',
            paddingTop: windowHeight(5),
          }}
        >
          It's easier than your imagination!
        </Text>
        <View
          style={{
            paddingVertical: windowHeight(10),
            flexDirection: 'row',
            gap: windowWidth(20),
          }}
        >
          <Pressable>
            <Image
              source={require('@/assets/images/onboarding/google.png')}
              style={{
                width: windowWidth(40),
                height: windowHeight(40),
                resizeMode: 'contain',
              }}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('@/assets/images/onboarding/github.png')}
              style={{
                width: windowWidth(40),
                height: windowHeight(40),
                resizeMode: 'contain',
              }}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('@/assets/images/onboarding/apple.png')}
              style={{
                width: windowWidth(40),
                height: windowHeight(40),
                resizeMode: 'contain',
              }}
            />
          </Pressable>
        </View>
      </Pressable>
    </BlurView>
  )
}
