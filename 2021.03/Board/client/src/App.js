import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/MainPage';
import Articles from './pages/ArticlesPage';
import Article from './pages/ArticlePage';
import Form from './pages/FormPage';

function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>
          <Route path="/new/article">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
