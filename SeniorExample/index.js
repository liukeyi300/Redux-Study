/**
 * Created by Liukeyi on 2016/11/22.
 */
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import Root from './container/Root';

export function start() {
    render(
        <Root />,
        document.getElementById('root')
    );
}