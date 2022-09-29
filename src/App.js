import logo from './boule-de-feu.png';
import './App.css';
import Vehicules from './components/vehicules.component';
import Sinistres from './components/sinistres.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2><em>The DISPATCHER</em></h2>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logo}className="App-logo" alt="logo"/>
        <p>
        <label>Quel est le sinistre ?</label>
        <select onChange="">          
          <option>Incendie</option>
          <option>Inondation</option>
          <option>Animal en détresse</option>         
        </select>        
        </p>
      </header>
      <body className='App-body'>

        <div className='App-sinistre'>
          <Sinistres />
        </div>       
        <div className='App-caserne'>
          <Vehicules />
        </div>
        
      </body>
    </div>
  );
}

export default App;
