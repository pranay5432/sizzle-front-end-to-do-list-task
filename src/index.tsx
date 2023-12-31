import * as React from "react"
import * as ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"

import App from "./App"

const rootElement = document.getElementById("root")
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
)
