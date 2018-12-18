import React, {Component} from 'react';
import './App.css';
import './Window.css'
import './Footer.css'
import Window from "./Window";
import FooterPage from "./Footer";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("test");
        this.state = {
            window: ['http://server.home:8080', 'http://test.server.home', 'http://dependencytrack.server.home']
        }
        this.getDomainNameList = this.getDomainNameList.call(this)
    }


    getDomainNameList() {
        let xmlHttpRequest = new XMLHttpRequest();
        let url = "http://server.home:8080/api/providers/docker/frontends";
        xmlHttpRequest.open("GET", url, true);
        xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
        xmlHttpRequest.send();
    }



    render() {
        return (
            <div className="App">
                {
                    this.state.window.map((windowName) => {
                        return (<Window name={windowName}/>)
                    })
                }
                <FooterPage/>
            </div>
        );
    }
}

export default App;
