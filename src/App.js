import './styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import 'fontsource-roboto';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
