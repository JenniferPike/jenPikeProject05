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
    componentDidMount() {
        const dbRef = firebase.database().ref()
        dbRef.on('value', (response) => {

            const data = response.val();
            
            const mustSee = data.mustSee;

            this.setState({
                mustSeeMovies:mustSee
            })
        })

    }
    render(){
        return(
            <div className="mustSee">
                <h1>Must See's</h1>
                <ul>
                    {this.state.mustSeeMovies.map((movie, i) => {
                    return <li key={i}>{movie}</li>
                    })} 
                </ul>
            </div>
        )
    }
}

export default MustSee;