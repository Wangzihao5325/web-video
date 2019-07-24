import React from 'react';
import { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import InitialComponent from './initialComponent';

const Main = lazy(() => import('../screen/main/index'));

const AppRouter = (props: any) => {
    if (props.isInitial) {
        return (
            <Suspense fallback={<div>加载ing!</div>}>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Main} />
                    </Switch>
                </Router>
            </Suspense>
        );
    } else {
        return (
            <InitialComponent />
        );
    }
}

function mapState2Props(store: any) {
    return {
        isInitial: store.initial.isDone
    }
}

const AppRouterWithStore = connect(mapState2Props)(AppRouter);

export default AppRouterWithStore;