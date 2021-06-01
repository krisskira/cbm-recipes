import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Routes} from './src/const/routes';

import LoginPage from './src/pages/login/login';
import RecipesPage from './src/pages/recipes/recipes';
import { Colors } from './src/const/colors';

const App = () => {
  const Stack = createStackNavigator();

  const options = {
    [Routes.login]: {
      headerShown: false,
    },
    [Routes.recipes]: {
      title: 'Recetas',
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.textPrimaryContrast,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      gestureEnabled: false,
      headerLeft: () => null,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={options[Routes.login]}
          name={Routes.login}
          component={LoginPage}
        />
        <Stack.Screen
          options={options[Routes.recipes]}
          name={Routes.recipes}
          component={RecipesPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
