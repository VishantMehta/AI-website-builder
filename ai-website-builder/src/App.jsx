import React from 'react';
import Login from './components/Login';
import MainPage from './components/MainPage';

function App() {
  const isLoggedIn = localStorage.getItem('userToken');

  return (
    <div className="App">
      {isLoggedIn ? <MainPage /> : <MainPage />}
    </div>
  );
}

export default App;
