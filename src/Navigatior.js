import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Biometrics from './Biometrics';
import Home from './Home';

const Stack = createStackNavigator();

const Navigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Biometrics" component={Biometrics} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
};

export default Navigator;