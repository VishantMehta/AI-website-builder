import React, { useState } from 'react';
import Login from './components/Login';
import MainPage from './components/MainPage';
import Register from './components/Register'; // Import the new Register component

function App() {
  const isLoggedIn = localStorage.getItem('userToken');
  const [showRegister, setShowRegister] = useState(false);

  // This is the main router for the app before a user is logged in.
  const AuthNavigator = () => {
    if (showRegister) {
      return <Register setShowRegister={setShowRegister} />;
    }
    return <Login setShowRegister={setShowRegister} />;
  };

  return (
    <div className="App">
      {/* If the user is logged in, show the MainPage.
        Otherwise, show our AuthNavigator which handles login/register switching.
      */}
      {isLoggedIn ? <MainPage /> : <AuthNavigator />}
    </div>
  );
}

export default App;
