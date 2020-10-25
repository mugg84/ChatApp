import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

import AppState from './components/context/AppState';

import styles from './App.module.scss';

const App = () => (
  <AppState>
    <Router>
      <section className={styles.app}>
        <Switch>
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </section>
    </Router>
  </AppState>
);

export default App;
