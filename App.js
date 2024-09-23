//returns object/react element/js object
//can be applied to a small portion of your app not same in a framework(come with baggage), do problem, will replace contents in the root,
const heading = React.createElement('h1',{id : 'anyValOrkey', xx:'yy'},'Hello world in React!')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)