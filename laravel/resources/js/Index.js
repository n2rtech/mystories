import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './components/src/scss/style.scss';
import axios from 'axios';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./components/src/containers/TheLayout'));

// Pages
const Home = React.lazy(() => import('./components/src/views/Home'));
const Login = React.lazy(() => import('./components/src/views/Login'));
const Register = React.lazy(() => import('./components/src/views/Register'));
const Page404 = React.lazy(() => import('./components/src/views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./components/src/views/pages/page500/Page500'));

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};


axios.defaults.withCredentials = true;
class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/" name="Home" render={props => <Home {...props}/>} />
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/admin" name="Admin" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
