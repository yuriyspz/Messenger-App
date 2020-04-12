import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import Login from "./components/login";
import rootSaga from "./actions";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default function App() {
    return (
        <Provider store={store}>
            <View>
                <Login/>
            </View>
        </Provider>
    );
}
