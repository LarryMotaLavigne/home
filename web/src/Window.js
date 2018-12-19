import React, {Component} from 'react';

export default class Window extends Component {
    render() {
        return <article className="thumb">
            <a href={this.props.name} target="_blank" className="linkwrap" rel="noopener noreferrer">
                <div className="wrap">
                    <div className="blocker"></div>
                    <div className="name">{this.props.name.substr(this.props.name.lastIndexOf('/')+1)}</div>
                    <iframe className="frame"
                            title={this.props.name}
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src={this.props.name}>
                    </iframe>
                </div>
            </a>
        </article>;
    }
}