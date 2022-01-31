import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from './components/layout/Header'
import AddContact from './components/contacts/AddContact'
import {Provider} from "./context";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import About from "./components/pages/About";
import EditContact from  './components/contacts/EditContact'

function App() {
  return (
    <Provider>
    <Router>
      <div className="App">
        <Header branding="Contact-Manager" />
        <div className="container">
        <Switch>
          <Route exact path='/' component={Contacts} />
          <Route exact path='/contacts/add' component={AddContact} />
          <Route exact path='/contacts/edit/:id' component={EditContact} />
          <Route exact path='/about' component={About} />
        </Switch>
        </div>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
