
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../components/auth/Login';
import CalendarScreen from '../components/calendar/CalendarScreen';

function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={CalendarScreen} />
                </Switch>    
            </div>
           
        </Router>
    )
}

export default AppRouter
