import React from 'react'
//import HolaMundoScreen from './src/screens/HolaMundoScreen'
import ContadorScreen from './src/screens/ContadorScreen'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { SafeAreaView } from 'react-native'
import { DimensionesScreen } from './src/screens/DimensionesScreen'

const App = () => {
  return (
    //<HolaMundoScreen />
    //<ContadorScreen />
    //<BoxObjectModelScreen />
    <SafeAreaView style={{ flex: 1 }}>
      <DimensionesScreen />
    </SafeAreaView>
  )
}

export default App