import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
       <Route exact path="/" component={Home} />
       <Route
        path="/about/:info"
        render={
          (props) =>
            <About
              { ...props }
              text="Se meu navio de React é o de teseu e eu refatorei
              todos os seus componentes, ele ainda é o meu navio?" />
          } />
    </BrowserRouter>
  );
}

export default App;
