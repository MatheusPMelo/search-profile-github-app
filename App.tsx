import * as React from'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages
import Home from './src/Pages/Home';
import Repositories from './src/Pages/Repositories';

const Stack = createNativeStackNavigator()

const App : React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Repositories" component={Repositories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;