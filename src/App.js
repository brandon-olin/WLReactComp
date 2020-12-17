import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import 'fontsource-roboto';

function App() {
  return (
    <div className="App">
      <div className="HomePage">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
