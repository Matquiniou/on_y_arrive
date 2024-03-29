<<<<<<< HEAD
import React from 'react';
import NavBar from './Navbar.js';
import Profils from './Profils.js';
import Comment from './Comment.js';
=======
import '../App.css';
import React from 'react';

import NavBar from './Components/NavBar.js';
import Comment from './Components/Comment.js';
import Profils from './Components/Profils.js';

>>>>>>> bc01f320e56e5a10e79f511a362ccdf9555e2b86
import martine from "../Martine.png";
import camille from "../Camille.png";
import boby from "../boby.png";

class Container extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      profile : [
        {
          photo: camille,
          prenom: "Camille",
          nom: "Dreyfus",
          date_naissance: "22/01/2000",
          Comment: "salut je m'appelle Camille",
        },
        {
          photo: martine,
          prenom: "Martine",
          nom: "Falvert",
          date_naissance: "11/19/2010",
          Comment: "salut je m'appelle Martine️",
        },
        {
          photo: boby,
          prenom: "Boby",
          nom: "Pellequer",
          date_naissance: "01/30/1999",
          Comment: "salut je m'appelle Boby",
        }
      ],
      show_profile: 0
    };
  }

  handleClick(i){
      this.setState({show_profile: i})
  }

  render() {
    return(
        <body className="Container">
          <header>
            <nav className="navbar">
              <NavBar
                  prenom={this.state.profile[0].prenom}
                  onClick={() => this.handleClick(0)}/>
              <NavBar
                  prenom={this.state.profile[1].prenom}
                  onClick={() => this.handleClick(1)}/>
              <NavBar
                  prenom={this.state.profile[2].prenom}
                  onClick={() => this.handleClick(2)}/>
            </nav>
          </header>
          <div className="profile">
            <Profils
                photo={this.state.profile[this.state.show_profile].photo}
                prenom={this.state.profile[this.state.show_profile].prenom}
                nom={this.state.profile[this.state.show_profile].nom}
                date_naissance={this.state.profile[this.state.show_profile].date_naissance}
            />
            <Comment
                Comment={this.state.profile[this.state.show_profile].Comment}/>
          </div>
        </body>
    );
  }
}

export default Container;
