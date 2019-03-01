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
          const haveSeenArray = [];
          for(let movie in haveSeen){
              haveSeenArray.push(haveSeen[movie]);
          }
        //   console.log(haveSeenArray);
          // change the state to show the new data
          this.setState({
              haveSeenMovies:haveSeenArray
          })
        })

    }

    render(){
        return(
            <div className="haveSeen">
                <h1>Have Seen's</h1>
                <ul>

                    { this.state.haveSeenMovies.length !== 0 ? 
                        this.state.haveSeenMovies.map((movie, i)=>{
                        return <li key={i}>{movie}</li>
                        
                    }):null}
                </ul>
            </div>
        )
    }
}

export default HaveSeen;