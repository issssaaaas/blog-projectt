
import './App.css';	import "./App.css";
import HomePage from "./pages/HomePage";


function App() {	function App() {
  return (	  return (
    <div className="App">	    <div className="App">
      <h1 className='text-red-500 text-5xl'>Hello World!</h1>	      <HomePage />
    </div>	    </div>
  );	  );
}	}
export default App;	export default App;
