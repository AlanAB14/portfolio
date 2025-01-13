import Contacto from './components/Contacto';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skillset from './components/Skillset';


function App() {



  return (
    <div className="App">
        <Header />
        <Navbar />
        <Portfolio />
        <Skillset />
        <Contacto />
        <Footer />
    </div>
  );
}

export default App;
