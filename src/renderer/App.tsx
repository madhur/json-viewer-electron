import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import './App.global.css';
import JsonEditor from './JsonEditor/json-editor';

const Hello = () => {
  return (
    <div>
      <SplitPane split="vertical">
        {/* <JsonEditor /> */}
        <div>
          Madhur Ahuja
        </div>
        <div />
      </SplitPane>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
