import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import PrivateRoute from './components/Home/Login/PrivateRoute/PrivateRoute';
import Pricing from './components/Home/Pricing/Pricing';
import NotFound from './components/NotFound/NotFound';
import Plans from './components/Plans/Plans';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="">
        <AuthProvider>
            <Router>
            <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <PrivateRoute path="/service/:serviceId">
                        <ServiceDetails></ServiceDetails>
                    </PrivateRoute>
                    <Route path="/pricing">
                        <Pricing></Pricing>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                    <Route path="/plans">
                        <Plans></Plans>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
