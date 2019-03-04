import React, {Component} from 'react';
import firebase from '../firebase';
import '../styles/mustSee.css';

class MustSee extends Component{
    constructor() {
        super();
        this.state = {
            mustSeeMovies: []
        }
    }
    removeMovie(movieId){
        const dbRefRemove = firebase.database().ref(`mustSee/${movieId}`);
        dbRefRemove.remove();
        
    }
    componentDidMount() {
        const dbRef = firebase.database().ref()
        dbRef.on('value', (response) => {

            const data = response.val();
            
            const mustSee = data.mustSee;
            const mustSeeArray = [];

            for(let movie in mustSee){
                mustSeeArray.push({
                    movie:mustSee[movie],
                    key:movie
                });
            }

            this.setState({
                mustSeeMovies:mustSeeArray
            })
        })

    }
    render(){
        return(
            <div className="needToSee">
                    <h2>Must See's</h2>
                <div className="mustSee">
                    <ul className="haventSeen">
                        {this.state.mustSeeMovies.length !== 0 ? this.state.mustSeeMovies.map((movie, i) => {

                            return (
                                <li key={movie.key}>
                                    {movie.movie}
                                    <button onClick={() => this.removeMovie(movie.key)}>X</button>
                                </li>
                            )
                        }) : null}
                    </ul>
                </div>
            </div>
            
        )
    }
}

export default MustSee;