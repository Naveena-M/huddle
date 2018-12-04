import React from 'react';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect, useRouterHistory, hashHistory, Redirect } from 'react-router';
import App from './components/App';
import Posts from './components/Posts';
import ViewPost from './components/ViewPost';
import UserTimeline from './components/UserTimeline';
import User from './components/User';
export default (
    <Router history={browserHistory}>
        <Route
            name="Index"
            component={App}
        >
            <IndexRedirect to="/posts/" />
            <Route
                path="/posts/"
                component={Posts}
            />
             <Route
                path="/users/:userId/posts/"
                component={UserTimeline}
            />
            <Route
                path="/posts/:postId/"
                component={ViewPost}
            />
            <Route
                path="/users/:userId"
                component={User}
            />
        </Route>
        <Redirect from="*" to="/posts/" />
    </Router>
)