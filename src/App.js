import React from 'react';
import './App.css';
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider.js";

function App() {
  return (
    <UserProvider>
      <Application/>
    </UserProvider>
  );
}
export default App;