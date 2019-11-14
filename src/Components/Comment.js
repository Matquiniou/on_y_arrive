import React from 'react';
import './App.css';
import './Navbar.js';
import './Profils.js';
import './Container.js';

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
