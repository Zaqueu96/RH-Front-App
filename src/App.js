import logo from './logo.svg';
import './App.css';
import 'react-perfect-scrollbar/dist/css/styles.css';


import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes'
function App() {
  return (
    <Router >
    <Routes />
  </Router>
  );
}

export default App;
