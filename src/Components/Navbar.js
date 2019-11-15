import React from 'react';
import '../App.css';

import Container from './Components/Container.js';
import Comment from './Components/Comment.js';
import Profils from './Components/Profils.js';

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
