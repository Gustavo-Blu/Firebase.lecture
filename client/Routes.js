import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import Homepage from './components/Home'

class Routes extends Component
{
    componentDidMount()
    {

    }

    render()
    {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Homepage} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Routes)
