import React from 'react';

class ActorSearch extends React.Component{
  constructor(props){
    super(props);
  }

  handleInput(event){
    var keyPressed = event.which;
    if (keyPressed !==13){
      this.setState({
        textinput: event.target.value
      })
    } else{
        this.props.userInput(this.state.textinput);
    }
  }

  render(){
    return(
      <input 
        id="actor-search"
        placeholder="Enter an Actor..." 
        type="text"
        onKeyUp={(event) => {this.handleInput(event)}}
        />
    )
  }
}
  export default ActorSearch;
