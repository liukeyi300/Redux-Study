/**
 * Created by Liukeyi on 2016/11/23.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../src/configureStore';
import AsyncApp from './AsyncApp';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        )
    }
}