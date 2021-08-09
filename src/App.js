import react from "react";
import './App.css';
import OrderDetail from './views/OrderDetail'
import Orders from './views/Orders'
import OrderCompleted from './views/OrderCompleted'
import ReOrder from './views/ReOrder'
import SecondReorder from './views/SecondReorder'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




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

export default App;
