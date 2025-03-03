import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { Redirect } from 'expo-router'

export default function Index() {
  const [loggedInUser, setLoggedInUser] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const subsription = async () => {
      const token = SecureStore.getItem('accessToken')
      console.log('token -> ', token)
      setLoggedInUser(token ? true : false)
    }

    subsription()
  }, [])

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Redirect href={!loggedInUser ? '/(routes)/onboarding' : '/(tabs)'} />
      )}
    </>
  )
}
