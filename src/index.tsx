import * as React from "react"
import * as ReactDOM from "react-dom"
import { App } from "./app"
import CssBaseline from "@material-ui/core/CssBaseline"

import { 
  createMuiTheme,
  ThemeProvider,
  Theme,
} from "@material-ui/core/styles"

export interface MainProps {
  props: {
    theme: string
  }
}

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
})

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
})

export function render(theme: Theme): void {
  const props = {
    theme: theme.palette.type,
  }
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App props={props}/>
    </ThemeProvider>,
    document.getElementById("root"),
  )
}

render(darkTheme)
