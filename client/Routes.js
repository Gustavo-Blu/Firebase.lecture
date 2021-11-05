import React, { Component, Fragment } from 'react'
import { BrowserRouter, withRouter, Route, Switch, Redirect } from 'react-router-dom'
import Homepage from './components/Home'
import Users from './components/Users'

class Routes extends Component
{
    componentDidMount()
    {

    }

    render()
    {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={Homepage} />
                    <Route exact Path="/users" component={Users} />
                    <Redirect to="/home" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default withRouter(Routes)
