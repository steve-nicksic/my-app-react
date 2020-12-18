import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Name from "./Name";
import FunFact from './FunFact';
import ThingsILike from './ThingsILike';
import Example from "./Example";

function App() {

const x = 4;

  return (
    <div className="App">
      <h1>Hello my name is Steve</h1>
      <h2>{x}</h2>

      <MyComponent></MyComponent>

      <Name />

      <FunFact/>

      <ThingsILike/>

      <Example/>

    </div>
  );
}

export default App;
