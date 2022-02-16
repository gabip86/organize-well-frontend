import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ListExpenseComponent from "./components/ListExpenseComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
      <div>
          <Router>
              <HeaderComponent />
              <div className="container">
                  <Switch>
                      <Route path="/*" component={ListExpenseComponent}/>
                      <Route path="/expenses" component={ListExpenseComponent}/>
                      <ListExpenseComponent />
                  </Switch>
              </div>
              <FooterComponent />
          </Router>
      </div>
  );
}

export default App;
