import React, { Component } from 'react';
import Child from './Component/Child';

class App extends Component {
  render() {
    return (
      <div>
        <Child
          display={false}
          heading="Edit Field"
        />
        <Child
          display={true}
          heading="Show Value" />
      </div>
    );
  }
}

export default App;
