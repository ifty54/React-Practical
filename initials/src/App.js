import './App.css';
import Greet from './Components/Greet'
import Tagline from './Components/Tagline'
function App() {
  return (
    <div className="App">
      <Greet />
      <Tagline name = "Travel Agency" subName = "Public Authority"/>
      <Tagline name = "Tourism Support" subName = "Govermental Authority"/>
    </div>
  );
}

export default App;
