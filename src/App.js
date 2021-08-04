import Navbar from 'containers/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const App = () => {
  return (
    <div css={tw`!font-poppins`}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={() => <h1>Home page</h1>} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
