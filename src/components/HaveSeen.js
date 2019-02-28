import React, {Component} from 'react';
import firebase from '../firebase.js';
import '../styles/haveSeen.css';

class HaveSeen extends Component{
    constructor() {
        super();
        this.state = {
           haveSeenMovies: []
        }
    }
    componentDidMount() {
        const dbRef = firebase.database().ref()
        dbRef.on('value', response =>{
            //go into firebase and collect the response value
          const data=response.val();
          // select the haveseen movies from the data
          const haveSeen = data.haveSeen;
          // change the state to show the new data
          this.setState({
              haveSeenMovies:haveSeen
          })
        })

    }

    render(){
        return(
            <div className="haveSeen">
                <h1>Have Seen's</h1>
                <ul>
                    {this.state.haveSeenMovies.map((movie, i)=>{
                        return <li key={i}>{movie}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default HaveSeen;