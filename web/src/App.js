import React, {Component} from 'react';
import './App.css';
import './Window.css'
import './Footer.css'
import Window from "./Window";
import FooterPage from "./Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            window: ['http://traefik.server.home', 'http://test.server.home', 'http://dependencytrack.server.home', 'http://portainer.server.home', 'http://dvwa.server.home', 'http://gitlab.server.home', 'http://server.home']
        }
        // this.getDomainNameList = this.getDomainNameList.call(this)
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
