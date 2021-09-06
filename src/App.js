import {React,ReactDOM} from "react";
import './App.css';
import OrderDetail from './views/OrderDetail'
import Orders from './views/Orders'
import OrderCompleted from './views/OrderCompleted'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './assets/css/styles.css';
import $ from "jquery";

function App() {
  return (
    <Router>
    <div className="App">

    <Switch>
      <Route path="/" exact component={Orders} />
      <Route path="/order-detail" exact component={OrderDetail}/>
      <Route path="/order-completed" exact component={OrderCompleted}/>
    </Switch>
    </div>
    </Router>
  );
}




$(document).ready(function() {
  // Users can skip the loading process if they want.
  $('.skip').click(function() {
  $('.overlay, body').addClass('loaded');
  })

  // Will wait for everything on the page to load.
  $(window).bind('load', function() {
  $('.overlay, body').addClass('loaded');
  setTimeout(function() {
  $('.overlay').css({'display':'none'})
  }, 2000)
  });

  // Will remove overlay after 1min for users cannnot load properly.
  setTimeout(function() {
  $('.overlay, body').addClass('loaded');
  }, 60000);
  })

export default App;
