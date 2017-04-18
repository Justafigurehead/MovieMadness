import React from 'react';

class FilmDetail extends React.Component{


  render(){
    if(!this.props.film){
      return null;
    }

    return(
      <div id="film-details">
        <h3>You picked: {this.props.film.show_title} <em>({this.props.film.release_year})</em></h3>
        <ul>
          <li>Director: {this.props.film.director}</li>
          <li>Cast: {this.props.film.show_cast}</li>
          <li>Summary: {this.props.film.summary}</li>
          <img src={this.props.film.poster} width='150' />
        </ul>
      </div>  
      )
  }

}

  export default FilmDetail;
