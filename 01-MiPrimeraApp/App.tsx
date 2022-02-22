import React from 'react';
import { SafeAreaView } from 'react-native';
import TareaScreen from './src/screens/TareaScreen';
// import FlexScreen from './src/screens/FlexScreen';
// import CounterScreen from './src/screens/CounterScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import DimensionsScreen from './src/screens/DimensionsScreen';
// import PositionScreen from './src/screens/PositionScreen';

const App = () => {
  return (
    // <CounterScreen />
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425B' }}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;