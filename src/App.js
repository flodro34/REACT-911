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
