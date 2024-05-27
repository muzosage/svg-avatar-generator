import React from 'react';
import ReactDOM from 'react-dom';
import AvatarGenerator from './components/AvatarGenerator';

const App = () => {
    return (
        <div>
            <h1>SVG Avatar Generator</h1>
            <AvatarGenerator />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
