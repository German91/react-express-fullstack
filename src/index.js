import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="welcome">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <h1>Hello World</h1>
          <hr/>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
