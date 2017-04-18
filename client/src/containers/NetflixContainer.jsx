import React from 'react';
import NetflixSelector from '../components/NetflixSelector';
import FilmDetail from '../components/FilmDetail';
import ActorSearch from '../components/ActorSearch';

class NetflixContainer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      films: [],
      focusFilm: null,
      userChoice: "Nicolas Cage"
    };
  }

  componentDidMount(){
    const url="http://netflixroulette.net/api/api.php?actor=" + this.state.userChoice;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () =>{
      if (xhr.status === 200){
      this.setState({
        films: JSON.parse(xhr.responseText)
      });
      }
    }
    xhr.send();
  }

  componentWillUpdate(){
    const url="http://netflixroulette.net/api/api.php?actor=" + this.state.userChoice;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () =>{
      if (xhr.status === 200){
      this.setState({
        films: JSON.parse(xhr.responseText)
      });
      }
    }
    xhr.send();
  }

  setFocusFilm(film){
    this.setState({
      focusFilm: film
    });
  }
  
  setUserChoice(userInput){
    this.setState({
      userChoice: userInput
    });
  }

  render(){
    return (
      <div id="netflix-container">
        <h2>Netflix Roulette</h2>
        <ActorSearch userInput={(userInput) => {this.setUserChoice(userInput)}}/>
        <NetflixSelector 
          actor= {this.state.userChoice}
          films={this.state.films}
          selectFilm={(film) => {this.setFocusFilm(film)}} />

        <FilmDetail film={this.state.focusFilm} />
      </div>
      )
  }
}

export default NetflixContainer;