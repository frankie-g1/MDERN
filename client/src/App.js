import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }
    
    callAPI(){
        fetch("http://localhost:9000")
        .then(res => console.log(res))
        .then(res => this.setState({ apiResponse: res}))
        .catch(err => err)
    }
    
    componentWillMount() {
        this.callAPI()
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="App-intro">
                    {this.state.apiResponse}
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          );
    }
}


export default App;
