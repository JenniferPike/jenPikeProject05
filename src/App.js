import React, { Component } from 'react';
import firebase from './firebase.js';
import Header from './components/Header';
import HaveSeen from './components/HaveSeen';
import MustSee from './components/MustSee';
import Footer from './components/Footer';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (event) =>{
    this.setState({
      userInput:event.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const dbRefHaveSeen = firebase.database().ref('/haveSeen');
    const dbRefMustSee = firebase.database().ref('/mustSee')
    
    const seenItButton = document.getElementById('seenIt').checked;
    const mustSeeButton = document.getElementById('mustSee').checked;
    
   //capture value of which checkbox selected
        //set a condition that says if value of checkbox = have seen or must see then push to correct array
    if( seenItButton === true){
      dbRefHaveSeen.push(this.state.userInput);
    }else if(mustSeeButton === true){
      dbRefMustSee.push(this.state.userInput);
    }

    this.setState({userInput:""})
  }
 
  
  render() {
    return (
      <div className="App wrapper">
        <Header />
        <HaveSeen />
        <MustSee />
        
        <form action="submit" onSubmit={this.handleSubmit} >
  
          <label htmlFor="seenIt">Seen It</label>
          <input type="radio" id="seenIt" name="watchStatus" value="haveSeenIt"/>
          <label htmlFor="mustSee">Must See</label>
          <input type="radio" id="mustSee" name="watchStatus" value="mustSee"/>
          <input type="text" onChange={this.handleChange} placeholder="enter movie" value={this.state.userInput}/>
          <button type="submit">Add Movie</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default App;
