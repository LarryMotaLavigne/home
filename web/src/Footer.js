import React, {Component} from "react";
import {Container, Footer} from "mdbreact";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default class FooterPage extends Component {
    render() {
        return (
            <Footer className="font-small mt-4">
                <div className="footer-copyright text-center py-2">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="https://larry.motalavigne.fr"> Larry Mota--Lavigne </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}