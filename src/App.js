import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Registration from './Components/Register/Registration';
import Login from './Components/LogIn/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import TaskOverView from './Components/TaskOverView/TaskOverView';

export const UserContext = createContext();
export const RegisteredUserContext = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({
    isLogIn: false,
    name: "",
    email: ""
  });

  const [registeredTask, setRegisteredTask] = useState({
    name: "",
    email: "",
    date: "",
    description: "",
    task: ""
  });

  return (
    <RegisteredUserContext.Provider value={[registeredTask, setRegisteredTask]}>
      <UserContext.Provider value={[loginUser, setLoginUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/registration/:key">
              <Registration></Registration>
            </PrivateRoute>
            <Route path="/taskOverView">
              <TaskOverView></TaskOverView>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route to="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </RegisteredUserContext.Provider>
  );
}

export default App;
