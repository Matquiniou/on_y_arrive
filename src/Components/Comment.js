import React from 'react';
import './App.css';

import NavBar from './Components/NavBar.js';
import Container from './Components/Container.js';
import Profils from './Components/Profils.js';

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
