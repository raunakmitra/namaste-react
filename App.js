import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement('h1',{id : 'anyValOrkey', xx:'yy'},'Hello world in React!')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)