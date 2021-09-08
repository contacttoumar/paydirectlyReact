import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import './assets/css/styles.css';
import './assets/css/bootstrap.min.css';
import OrderDetail from './views/OrderDetail'
import Orders from './views/Orders'
import OrderCompleted from './views/OrderCompleted'
export default function Routes(props) {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Orders} />
                    <Route path="/order-detail" exact component={OrderDetail} />
                    <Route path="/order-completed" exact component={OrderCompleted} />
                </Switch>
            </Router>
        </>
    );
}
