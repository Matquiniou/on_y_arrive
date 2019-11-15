import React from 'react';
<<<<<<< HEAD
=======
import './App.css';

import NavBar from './Components/NavBar.js';
import Container from './Components/Container.js';
import Profils from './Components/Profils.js';
>>>>>>> bc01f320e56e5a10e79f511a362ccdf9555e2b86

class Comment extends React.Component {
    render() {
        return(
            <div className="boxComment">
                <a>{this.props.lastComment}</a>
                <div> 👍  C'est super ! </div>
            </div>
        );
    }
}

export default Comment;
