import firebase from 'firebase';

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDOP2GEU6nbXkjqwjgvXriWJzGkuu4APNk",
        authDomain: "jen-pike-project-5.firebaseapp.com",
        databaseURL: "https://jen-pike-project-5.firebaseio.com",
        projectId: "jen-pike-project-5",
        storageBucket: "jen-pike-project-5.appspot.com",
        messagingSenderId: "266165452163"
    };
    firebase.initializeApp(config);

export default firebase;
