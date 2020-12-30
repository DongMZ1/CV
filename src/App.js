import logo from './logo.svg';
import './App.css';
import TopNavbar from './TopNavbar'
import Projectlist from './Projectlist'
import Homepage from './Homepage'
import Degreepage from './Degreepage'
import Contactme from './Contactme'
import { HashRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
function App() {
  return (
    <>
     <Router>
       <Switch>
       <Route path = '/' component = {Homepage} exact />
       <Route path = '/Degreepage' component = {Degreepage} exact />
       <Route path = '/Projectlist' component = {Projectlist} exact />
       <Route path = '/Contactme' component = {Contactme} exact />
      </Switch>
      </Router>
    </>
  );
}

export default App;
