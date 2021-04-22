// import logo from './logo.svg';
// import './App.css';
import Register from '../src/pages/Registration/Registration'
import Login from '../src/pages/Login/Login';
import ForgetPassword from '../src/pages/ForgetPassword/ForgetPassword'
import Resetpassword from '../src/pages/ResetPassword/ResetPassword'
import Dashboard from './pages/Components/Dashboard/Dashboard'
import { BrowserRouter as Router, Route, Link, Navlink, Switch, BrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from "./ProtectedRoute";
const Routing =()=>{
  return(
  <Router>
    <div>
      <Switch>
       <Route  exact path="/" component={Register} ></Route>
       <Route path="/login" component={Login} ></Route>
       <Route path="/forgetpassword" component={ForgetPassword} ></Route>
       <Route path="/resetpassword/:token" component={Resetpassword} ></Route>
       <ProtectedRoute path="/dashboard" component={Dashboard} />
       </Switch>
    </div>
  </Router>)
}
function App() {
  return (
    <BrowserRouter> <Routing /> </BrowserRouter>
  );
}

export default App;
