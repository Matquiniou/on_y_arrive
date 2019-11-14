import React from 'react';
import '../App.css';
import './Navbar.js';
import './container.js';
import './Comment.js';

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
