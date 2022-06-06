import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
       <Route exact path="/" component={Home} />
       <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
