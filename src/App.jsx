import './App.css';
import './components/style.css'
import Base from './components/Base';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Event from './components/Event';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Base/>
      <Cards/>
      <Event/>
      <Footer/>
    </div>
  );
}

export default App;
