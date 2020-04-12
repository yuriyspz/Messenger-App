import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import Login from "./components/login";
import Register from "./components/register";
import rootSaga from "./actions";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";


const Stack = createStackNavigator();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Sign In">
                    <Stack.Screen name="Sign In" component={Login}/>
                    <Stack.Screen name="Sign Up" component={Register}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
