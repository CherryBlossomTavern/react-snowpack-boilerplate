import * as React from "react"
import { MainProps } from "./index"
import { Router } from "router"

// Global stylesheet
import "scss/global.scss"

export const App: React.FC<MainProps> = (props: MainProps) => (
  <div>
    <Router props={props.props} />
  </div>
)
