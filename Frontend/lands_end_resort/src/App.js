import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import { Footer } from './Components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check if values exist in localStorage
    const localStorageValues = localStorage.getItem('token');

    // If values exist, clear localStorage
    if (localStorageValues) {
      localStorage.clear();
    }
  }, []);

  const isOnAdminRoute = location.pathname === '/admin';

  return (
    <div className="App">
      {isOnAdminRoute ? (
        <>
          <br />
          <AllRoutes />
          <br />
        </>
      ) : (
        <>
          <br />
          <Navbar />
          <br />
          <br />
          <AllRoutes />
          <br />
          <br />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
