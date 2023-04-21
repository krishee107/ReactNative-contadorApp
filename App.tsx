import React from 'react'
//import HolaMundoScreen from './src/screens/HolaMundoScreen'
import ContadorScreen from './src/screens/ContadorScreen'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { SafeAreaView } from 'react-native'
import { DimensionesScreen } from './src/screens/DimensionesScreen'
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen'
import { TareaScreen } from './src/screens/TareaScreen'

const App = () => {
  return (
    //<HolaMundoScreen />
    //<ContadorScreen />
    //<BoxObjectModelScreen />
    //<DimensionesScreen />
    //<PositionScreen />
    //<FlexScreen />
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425b' }}>
      <TareaScreen />
    </SafeAreaView>
  )
}

export default App