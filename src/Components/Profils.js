import React from 'react';
<<<<<<< HEAD
=======
import '../App.css';

import NavBar from './Components/NavBar.js';
import Comment from './Components/Comment.js';
import Container from './Components/Container.js';
>>>>>>> bc01f320e56e5a10e79f511a362ccdf9555e2b86

class Profils extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: ""
        }
    }

        handleClick = (e) => {
        if (this.state.bgColor === "cornflowerblue") {
            this.setState({
                bgColor: "white"
            })
        } else {
            this.setState({
                bgColor: "red"
            })
        }
    }

    render() {
        return(
            <div className="profileB1" style={{backgroundColor: this.state.bgColor}}>
                <img src={this.props.photo}/>
                <div className="profileBio">
                    <a>{this.props.prenom}</a>
                    <a>{this.props.nom}</a>
                    <a>{this.props.date_naissance}</a>
                </div>
                <div className="profileB">
                    <button id="style"
                            onClick={this.handleClick}>
                        Change style
                    </button>
                </div>
            </div>
        );
    }
}

export default Profils;
