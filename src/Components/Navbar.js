import React from 'react';
<<<<<<< HEAD
=======
import '../App.css';

import Container from './Components/Container.js';
import Comment from './Components/Comment.js';
import Profils from './Components/Profils.js';
>>>>>>> bc01f320e56e5a10e79f511a362ccdf9555e2b86

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
