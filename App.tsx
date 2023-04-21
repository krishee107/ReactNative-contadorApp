import React from 'react'
//import HolaMundoScreen from './src/screens/HolaMundoScreen'
import ContadorScreen from './src/screens/ContadorScreen'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { SafeAreaView } from 'react-native'
import { DimensionesScreen } from './src/screens/DimensionesScreen'
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen'

const App = () => {
  return (
    //<HolaMundoScreen />
    //<ContadorScreen />
    //<BoxObjectModelScreen />
    //<DimensionesScreen />
    //<PositionScreen />
    <SafeAreaView style={{ flex: 1 }}>
      <FlexScreen />
    </SafeAreaView>
  )
}

export default App