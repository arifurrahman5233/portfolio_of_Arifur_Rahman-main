import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Home from './Component/Home/Home';

function App() {
  return (
    <Router>
      <Home></Home>
    </Router>
  );
}

export default App;
