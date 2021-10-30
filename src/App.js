import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/authProvider';
import Booking from './components/Home/Booking/Booking';
import ManageAllEvents from './components/ManageAllEvents/ManageAllEvents';
import AddTour from './components/AddTour/AddTour';
import MyEvent from './components/MyEvent/MyEvent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/allPlans'>
              <ManageAllEvents></ManageAllEvents>
            </PrivateRoute>
            <PrivateRoute path='/addTour'>
              <AddTour></AddTour>
            </PrivateRoute>
            <PrivateRoute path='/myPlans'>
              <MyEvent></MyEvent>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
