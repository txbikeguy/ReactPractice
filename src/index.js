import React from 'react';
import ReactDOM from 'react-dom';

// Create new component. This component should produce
// some HTML
const App = () => {
    return <div>Hi!</div>;
};
// Take this component generated HTML and put it in the DOM(on the page)
ReactDOM.render(<App />, document.querySelector('.container '));