
import './App.css';
import './header';
import Header from './header';
import About from './about';
import Portfolio from './Portfolio';
import Contact from './contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
       
    </div>
  );
}

export default App;
