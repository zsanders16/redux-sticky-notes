import React from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Container } from 'semantic-ui-react'


const App = () => (
  <div className="App">
    <Container textAlign='center'>
      <Form />
    </Container>
    <Container textAlign='justified'>
      <br />
      <List />
    </Container>
  </div>
);

export default App;
