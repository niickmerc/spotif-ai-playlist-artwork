import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:8888/login")
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">spotif.ai basic react frontend</h1>
                </header>
            </div>
        );
    }
}

export default App;