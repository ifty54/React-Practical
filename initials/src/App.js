import './App.css';
import Greet from './Components/Greet'
import Tagline from './Components/Tagline'
import Message from './Components/Message'
function App() {
  return (
    <div className="App">
      <Greet />
      <Tagline name = "Travel Agency" subName = "Public Authority">
      <p>What's our motto?</p>
      </Tagline>
      <Tagline name = "Tourism Support" subName = "Govermental Authority"/>
      <Message/>
    </div>
  );
}

export default App;
