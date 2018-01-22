import React, { Component } from 'react';

import { View } from 'react-native';
import {Provider} from 'react-redux';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {ThunkAction} from 'redux-thunk'
import { createLogger } from 'redux-logger';


export default class ReduxExample extends Component {

    render() {
        return (
             <View>
             </View>
        )
    }

}