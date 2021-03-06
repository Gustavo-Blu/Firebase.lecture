import React, { Component } from 'react'
import { BrowserRouter, withRouter, Route, Switch, Redirect } from 'react-router-dom'
import Homepage from './components/Home'

class Routes extends Component
{
    render()
    {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Homepage} />
                    <Redirect to="/home" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default withRouter(Routes)
