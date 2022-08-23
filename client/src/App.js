import './App.css';
import Navbar from './components/Navbar';
import Intensity from './components/variables/Intensity';
import Country from './components/variables/Country';
import Likelihood from './components/variables/Likelihood';
import Region from './components/variables/Region';
import Relevance from './components/variables/Relevance';
import Topics from './components/variables/Topics';
import Year from './components/variables/Year';
import Filter from './components/filters/Filter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
      <div className="bg-zinc-100 flex justify-center items-center flex-wrap">
        <Relevance />
        <Likelihood />
        <Country />
        <Intensity />
        <Region />
        <Topics />
      </div>
    </div>
  );
}

export default App;
