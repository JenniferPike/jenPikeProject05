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
    const dbRef = firebase.database().ref('/haveSeen');
    
    const seenItButton = document.getElementById('seenIt').checked;
    
    if( seenItButton === true){
      dbRef.push(this.state.userInput);
    }

    this.setState({userInput:""})
  }
  //in handle submit - capture value of which checkbox selected
  // set a condition that says if value of checkbox = have seen or must see and push to correct array
  
  render() {
    return (
      <div className="App">
        <Header />
        <HaveSeen />
        <MustSee />
        
        <form action="submit" onSubmit={this.handleSubmit} >
          {/* TODO:add Checked */}
          <label htmlFor="seenIt">Seen It</label>
          <input type="checkbox" id="seenIt" name="watchStatus" value="haveSeenIt"/>
          <label htmlFor="mustSee">Must See</label>
          <input type="checkbox" id="mustSee" name="watchStatus" value="mustSee"/>
          <input type="text" onChange={this.handleChange}placeholder="enter movie"/>
          <button type="submit">Add Movie</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default App;
