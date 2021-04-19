import * as React from "react"

import {
  BrowserRouter as MRouter,
  Route,
  Switch,
} from "react-router-dom"

import { MainProps } from "../index"

import { Home } from "views/home"
import { FourOFour } from "views/404"

export const Router: React.FC<MainProps> = (props: MainProps) => (
  <MRouter>
    <Switch>
      <Route exact path="/">
        <Home props={props.props} />
      </Route>
      <Route path="*" component={FourOFour} />
    </Switch>
  </MRouter>
)
