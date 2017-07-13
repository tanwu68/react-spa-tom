import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers';
import Home from '../containers/Home';
import SignIn from '../containers/SignIn';
import ProList from '../containers/ProList';
import User from '../containers/User';
import Detail from '../containers/Detail';
import NotFound from '../containers/404';

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/Login(/:router)' component={SignIn}/>
                    <Route path='/ProList' component={ProList}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap;
