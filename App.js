import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import Login from "./components/login";
import Register from "./components/register";
import rootSaga from "./sagas/sagas";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

export const navigationRef = React.createRef();
const Stack = createStackNavigator();
const sagaMiddleware = createSagaMiddleware();
export function navigate(name, params) {
    navigationRef.current && navigationRef.current.navigate(name, params);
}
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer  ref={navigationRef}>
                <Stack.Navigator initialRouteName="Sign In">
                    <Stack.Screen name="Sign In" component={Login}/>
                    <Stack.Screen name="Sign Up" component={Register}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
