import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingScreen = () => {
  return (
      <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}
      >
          <ActivityIndicator
            size={50}
            color='#000000'
          />
      </View>
  );
};

export default LoadingScreen;