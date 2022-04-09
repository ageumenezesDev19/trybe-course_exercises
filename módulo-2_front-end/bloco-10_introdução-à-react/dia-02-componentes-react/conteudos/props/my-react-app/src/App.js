import './App.css';
import Greeting from './Greeting';
import Image from './Image';

function App() {
  return (
    <div>
      <Greeting argument="Whats Up?" />
      <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring"/>
    </div>
  );
}

export default App;
