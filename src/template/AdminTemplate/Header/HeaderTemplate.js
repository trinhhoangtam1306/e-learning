import React from 'react';

import {Route} from 'react-router-dom'
import Header from '../../../component/admin/header/Header';

export const HeaderTemplate = (props) => {
    let {Component, path} = props;

    return <Route exact path={path} render={(propsRoute) => {
        return <div>
            <Header />
            <Component {...propsRoute} />
        </div>

    }}/>
}