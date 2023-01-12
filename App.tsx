import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native'

import theme from './src/styles/theme';

//pages
import Routes from './src/routes';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor='transparent' />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;