import React from 'react';
import '../App.css';
import './Container.js';
import './Profils.js';
import './Comment.js';

class NavBar extends React.Component {
    render() {
        return(
            <button onClick={this.props.onClick}>
                {this.props.prenom}
            </button>
        );
    }
}

export default NavBar;
