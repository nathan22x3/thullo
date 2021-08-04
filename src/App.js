import Navbar from 'containers/Navbar';
import HomePage from 'pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
