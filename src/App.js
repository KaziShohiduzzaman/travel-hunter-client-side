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
            <Route path='/allPlans'>
              <ManageAllEvents></ManageAllEvents>
            </Route>
            <Route path='/addTour'>
              <AddTour></AddTour>
            </Route>
            <Route path='/myPlans'>
              <MyEvent></MyEvent>
            </Route>
            <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
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
