import './App.css';
import './Components/Player.css'
import Player from './Components/Player.js';
import Data from './Data.json'
import List from './List/List.js'
import Match from './Components/Match.js'
import MatchClass from './Components/MatchClass.js'
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import ReactBootstrap from './React Bootstrap/ReactBootstrap';
import State from './Components/State';
import Rendering from './Conditional Rendering/Rendering';
import EventHandler from './Event Handler Class/EventHandler';
import Binding from './Event Binding/Binding';
import Hooks from './Hooks Use States/Hooks';
import FunctionalHooks from './Hooks Use States/FunctionalHooks';

function App() {
  return (
    <div>
      <h1>Football</h1>
      <EventHandler />
      <Binding />
      <Rendering />
      <Hooks />
      <FunctionalHooks />
      <ReactBootstrap />
        <span className='icon'>
         <AiFillFacebook />
         <AiFillTwitterSquare />
        </span>
        <State />
        <Player playerName = {Data[0].Player} playerClub = {Data[0].Club} />
        <List />
        <Match company="Star Sports" type="Limited Company" />
        <MatchClass issue="Android Apps Unavailable"/>
    </div>
  );
}

export default App;


