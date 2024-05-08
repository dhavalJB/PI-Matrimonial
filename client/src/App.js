import React, { useState } from 'react';
import UserDetails from './components/UserDetails';
import UserForm from './components/UserForm';
import Listing from './components/Listing';
import Search from './components/Search';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Footer from './components/Footer';
import './App.css';
import FrontPage from './components/FrontPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/FrontPage.css';
import myLogo from './img/logo.jpg';


function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleAuthenticate = () => {
    Pi.authenticate(['username', 'payments', 'wallet_address'], onIncompletePaymentFound)
      .then(authResult => {
        // Handle successful authentication
        const accessToken = authResult.accessToken;
        const user = authResult.user;
        console.log('Authentication successful:', user);
        // Proceed with your application logic
        setUser(user);
        setCurrentPage('Home');
      })
      .catch(error => {
        // Handle authentication error
        console.error('Authentication failed:', error);
        setError('Authentication failed');
      });
  };

  const onIncompletePaymentFound = payment => {
    // Handle incomplete payment found
    console.log('Incomplete payment found:', payment);
    // You may want to complete the payment here before proceeding
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    setUser(null);
  };
 
  return (
    <div className="App">
      <header>
        <div class="container">
          <div class="header-left">
            <div class="logo">
              <img src={myLogo} />
            </div>
          </div>
          <div class="header-right">
            {!user && <button class="authenticate-btn" onClick={handleAuthenticate}>Authenticate</button>}
            {user && <span>{user.username}</span>}
            <nav class="navbar">
              <div class="dropdown">
                <button class="dropbtn">Menu</button>
                <div class="dropdown-content">
                  <button onClick={() => handleNavigate('Home')}>Home</button>
                  <button onClick={() => handleNavigate('Listing')}>Listing</button>
                  <button onClick={() => handleNavigate('Search')}>Search</button>
                  {user && <button onClick={() => handleNavigate('Details')}>Details</button>}
                  <button onClick={() => handleNavigate('Contact')}>Contact</button>
                  {user && <button onClick={handleLogout}>Logout</button>}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {currentPage === 'Home' && (
          <div>
            {error && <p>{error}</p>}
          </div>
        )}
        {currentPage === 'Listing' && <Listing />}
        {currentPage === 'Search' && <Search />}
        {currentPage === 'Details' && user ? <Detail user={user} /> : null} {/* Use Detail component */}
        {currentPage === 'Contact' && <Contact />}
      </main>

      {currentPage === 'Home' && <FrontPage />}

      <Footer />
    </div>
  );
}

export default App;
