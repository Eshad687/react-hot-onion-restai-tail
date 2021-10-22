import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Cart from './pages/Cart/Cart';
import FoodDetails from './pages/FoodDetails/FoodDetails';

import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/cart">
            <Cart></Cart>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/:foodId">
            <FoodDetails></FoodDetails>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </AuthProvider>

  );
}

export default App;
