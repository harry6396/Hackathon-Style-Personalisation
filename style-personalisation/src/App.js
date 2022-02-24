import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import ApplicationBar from './components/ApplicationBar';

import HomeBG from './components/HomePageBG'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails';
import TrackingDetails from './components/TrackingDetails';
import OrderSummary from './components/OrderSummary';

function App() {
  return (
    <Router >
      <div className="App">
        <ApplicationBar/>
        <Routes>
          <Route exact path='/' element={< HomeBG />}></Route>
          <Route exact path='/products' element={< Products />}></Route>
          <Route exact path='/product/:productId' element={<ProductDetails/>}></Route>
          <Route exact path='/track/:orderID' element={<TrackingDetails/>}></Route>
          <Route exact path='/orderSummary' element={<OrderSummary/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
