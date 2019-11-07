import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import { Provider } from './Context';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import LifeCycleMethods from './components/test/LifeCycleMethods';
import EditContact from './components/contacts/EditContact';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Contacts} />
              <Route path="/contact/add" exact component={AddContact} />
              <Route path="/about" exact component={About} />
              <Route path="/contact/edit/:id" exact component={EditContact} />
              <Route path="/lcm" exact component={LifeCycleMethods} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
