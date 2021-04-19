import * as React from "react"
import { IconButton } from "@material-ui/core"
import { HighlightOutlined } from "@material-ui/icons"
import {
  MainProps,
  render,
  lightTheme,
  darkTheme, 
} from "../../index"
import "./style.scss"

export class Home extends React.Component<MainProps, { currTheme: string }> {
  constructor(props: MainProps) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  state: { currTheme: string } = {
    currTheme: this.props.props.theme,
  }
  handleClick(): void {
    if (this.state.currTheme === "dark") {
      render(lightTheme)
      this.setState({ currTheme: "light" })
    } else {
      render(darkTheme)
      this.setState({ currTheme: "dark" })
    }
  }
  render(): React.ReactNode {
    return (
      <div className="home">
        <img className="react" src="dist/assets/react.png" width="300" height="300"/>
        <h1 className="txt">React/Snowpack Boilerplate</h1>
        <IconButton onClick={this.handleClick}><HighlightOutlined fontSize="default" /></IconButton>
      </div>
    )
  }
}
