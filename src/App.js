import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';
import Header from './components/Header';
import HaveSeen from './components/HaveSeen';
import MustSee from './components/MustSee';
import Footer from './components/Footer';




class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      buttonChecked: null,
    }
  }

  handleChange = (e) => {
    this.setState({
      userInput:e.target.value
    })
  }


  handleCheckboxChange = (e) => {
    this.setState({
      buttonChecked: e.target.id
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const dbRefHaveSeen = firebase.database().ref('/haveSeen');
    const dbRefMustSee = firebase.database().ref('/mustSee')
    
    const seenItButton = this.state.buttonChecked === 'seenItButtonIsChecked';
    const mustSeeButton = this.state.buttonChecked === 'mustSeeButtonIsChecked';
    
   //capture value of which checkbox selected
        //set a condition that says if value of checkbox = have seen or must see then push to correct array
    if( seenItButton === true){
      dbRefHaveSeen.push(this.state.userInput);
    }else if(mustSeeButton === true){
      dbRefMustSee.push(this.state.userInput);
    }

    this.setState({userInput:""})
  }
  
  showError = (e)=>{
    //stop user from submitting empty string
    //odd characters allowed as some movies have them.
    //TODO:add errror handling in this Project currently allows empty string submissions
  }
 
  
  render() {
    return (
      <div className="App wrapper">
        <Header />
        <div className="movieDiv">
          <HaveSeen />
          <MustSee />
        </div>
        
        <form action="submit" onSubmit={this.handleSubmit} >
          <div className="radioButtons">
            <label htmlFor="seenItButtonIsChecked">Seen It</label>
            <input type="radio" id="seenItButtonIsChecked" onChange={this.handleCheckboxChange} name="watchStatus" checked={this.state.buttonChecked === 'seenItButtonIsChecked'}/>

            <label htmlFor="mustSeeButtonIsChecked">Must See</label>
            <input type="radio" id="mustSeeButtonIsChecked" onChange={this.handleCheckboxChange} name="watchStatus" checked={this.state.buttonChecked === 'mustSeeButtonIsChecked'}/>
          </div>
          
          <input type="text" className="inputBox" onChange={this.handleChange} placeholder="enter movie" value={this.state.userInput} required/>
          <button type="submit" className="submitButton">Add Movie</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default App;
