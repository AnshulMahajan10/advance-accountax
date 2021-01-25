import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/home/Home';
import Services from './components/pages/services/Services';
import About from './components/pages/about/About';

function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/about' component={About} />
      </Switch>



    </Router>
  );
}

export default App;
