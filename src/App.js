import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
// import Login from "./pages/Login/Login/Login";
import AllProducts from "./pages/AllProducts/AllProducts";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import PrivateRoute from "./Private/PrivateRoute";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import Login from "./pages/Login/Login/Login";

function App() {
  return (
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/allProducts">
            <AllProducts></AllProducts>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/product/:productId">
            <SingleProduct></SingleProduct>
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
