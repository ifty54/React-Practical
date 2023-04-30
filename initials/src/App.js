import './App.css';
import Greet from './Components/Greet'
import Tagline from './Components/Tagline'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
function App() {
  return (
    <div className="App">
      <FunctionClick />
      <Counter />
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
