import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ Index } />
      </Switch>
    </Router>
  );
}

export default App;
