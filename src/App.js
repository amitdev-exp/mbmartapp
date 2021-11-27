import logo from './logo.svg';
import './App.css';
import Home from '../src/screens/Home/home'
import Nav from '../src/component/navigation/nav'
import Footer from '../src/component/footer/footer'

function App() {
  return (
    <div className="App">
          <Nav />
          <Home />
          <Footer />
    </div>
  );
}

export default App;
