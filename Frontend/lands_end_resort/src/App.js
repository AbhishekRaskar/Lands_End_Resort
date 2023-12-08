import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <br />
      <Navbar />
      <br />
      <AllRoutes />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
