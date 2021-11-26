// import logo from '../src/images/logo.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AuthProvider from './Components/Contex/AuthProvider';
import Detailsbtn from './Components/Detailsbtn/Detailsbtn';
import Doctors from './Components/Doctors/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Servicedetails from './Components/Servicedetails/Servicedetails';
// import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          {/* link header nav */}
          <br />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/doctor">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <Servicedetails></Servicedetails>
            </PrivateRoute>
            <PrivateRoute path="/details/:servicesid">
              <Detailsbtn></Detailsbtn>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>

          </Switch>
          <br />
          <Footer></Footer>
          {/* link footer  */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
