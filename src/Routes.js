import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, Redirect } from 'react-router';
import App from './components/App';
import Posts from './components/Posts';
import ViewPost from './components/ViewPost';
import UserTimeline from './components/UserTimeline';
import NoPageFound from './components/NoPageFound';
import User from './components/User';
import Photos from './components/Photos';
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
             <Route
                path="/404/"
                component={NoPageFound}
            />
             <Route
                path="/users/:userId/:albumId/photos/"
                component={Photos}
            />
        </Route>
        <Redirect from="*" to={"/404/"} />
    </Router>
)