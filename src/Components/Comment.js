import React from 'react';

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
