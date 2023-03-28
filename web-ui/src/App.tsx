import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { ResumeView } from './features/resume/ResumeView';

function App() {
  return (
    <Container fluid className="App">
      <ResumeView />
    </Container>
  );
}

export default App;
