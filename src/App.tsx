import * as React from 'react';
import './App.css';
import { UserHeader } from 'src/pods/user';

const logo = require('./logo.svg');

interface TestProps {
  test: string;
}

const Test = ({test}: TestProps) => <div>{test}</div>;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserHeader user={{name: 'Wojtek Jaszczak'}}/>
        <Test test={'text'}/>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
