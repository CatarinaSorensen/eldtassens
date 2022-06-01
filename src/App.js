import './App.css';
import Footer from './Footer'
import Header from './Header'
import Fallback from './Fallback'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="Content"></div>
          </Route>
          <Route path="/kullar">
            <Fallback />
          </Route>
          <Route path="/planer">
            <Fallback />
          </Route>
          <Route path="/presentation">
            <Fallback />
          </Route>
          <Route path="/hundar">
            <Fallback />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
