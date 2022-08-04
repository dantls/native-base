import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { NativeBaseProvider , Box} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box
        safeArea
        flex="1"
      >
        <Text>Teste</Text>
        <StatusBar style="auto" />
      </Box>
    </NativeBaseProvider>
  );
}
