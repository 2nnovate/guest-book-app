import React from 'react';
import './App.css';

import GuestBook from "./components/guestBook";

const App = () => (
    <div className="App">
      <header className="App-header">
        <p>Please write a guestbook.</p>
      </header>
      <GuestBook />
    </div>
);

export default App;
