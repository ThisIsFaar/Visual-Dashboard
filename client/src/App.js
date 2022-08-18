import './App.css';
import Navbar from './components/Navbar';
import Intensity from './components/variables/Intensity';
import City from './components/variables/City';
import Country from './components/variables/Country';
import Likelihood from './components/variables/Likelihood';
import Region from './components/variables/Region';
import Relevance from './components/variables/Relevance';
import Topics from './components/variables/Topics';
import Year from './components/variables/Year';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-amber-50 h-screen flex justify-center items-center wrap">
        <Intensity />
        <City />
        <Country />
        <Likelihood />
        <Region />
        <Relevance />
        <Topics />
        <Year />
      </div>
    </div>
  );
}

export default App;
