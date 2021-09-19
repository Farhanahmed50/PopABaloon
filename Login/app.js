const firebaseConfig = {
    apiKey: "AIzaSyAs6NeOYr0yXLGO3y9jziY0wpPO3yqk0J4",
    authDomain: "hackathon-webapp.firebaseapp.com",
    projectId: "hackathon-webapp",
    storageBucket: "hackathon-webapp.appspot.com",
    messagingSenderId: "524578543512",
    appId: "1:524578543512:web:fc605dbf18d8f266fbbded",
    measurementId: "G-XVY0PKY8F2"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const login = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            // console.log(result);
            window.location.replace("./");

        })
        .catch((error) => {
            var errorCode = error.code;

            var errorMessage = error.message;
        
            alert(errorMessage)
            var email = error.email;
        
            var credential = error.credential;
            alert(credential);
        
        });
}