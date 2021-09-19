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

auth.onAuthStateChanged((user) => {
    if (user) {
        console.log(user)
        document.getElementById("userName").innerHTML = user.displayName;
        // let image = document.createElement("img");
        // let imageParent = document.getElementById("userPro");
        // image.id = "Id";
        // image.className = "class";
        // image.src = user.photoURL;
        // imageParent.appendChild(image);
        
        document.getElementById("image").src = user.photoURL;
    }
    else {
        firebase.auth().signOut().then(() => {
        })
        window.location.replace("./Login.html")
    }
})


const createElement = (mainDiv, className, color) => {
    const childElement = document.createElement("div");
    childElement.className = className;
    childElement.style.backgroundColor = color;
    mainDiv.appendChild(childElement);
}

const createSpan = (mainDiv, color) => {
    const childElement = document.createElement("span");
    childElement.innerHTML = "POP!"

    childElement.style.color = color;
    mainDiv.appendChild(childElement);
}

const mainDiv = document.getElementById("baloons");

const red = "#FE3000";
const blue = "#3F79BF";
const yellow = "#FECD01";
const grey = "#8D7A8D";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(getRndInteger(1, 4));
let noOfBlue = 0
let noOfRed = 0
let noOfGrey = 0
let noOfYellow = 0
let noOfColor;
let color = "";

const createBaloons = () => {

    for (let i = 0; i < 30; i++) {
        const random = getRndInteger(1, 4);
        if (random === 1) {
            createElement(mainDiv, "baloon", red);
            ++noOfRed;
        }
        else if (random === 2) {
            createElement(mainDiv, "baloon", blue);
            ++noOfBlue;
        }
        else if (random === 3) {
            createElement(mainDiv, "baloon", yellow);
            ++noOfYellow;
        }
        else if (random === 4) {
            createElement(mainDiv, "baloon", grey);
            ++noOfGrey;
        }
    }
    const forColor = getRndInteger(1, 4);
    if (forColor === 1) {
        color = "Red";
        noOfColor = noOfRed;
    }
    else if (forColor === 2) {
        color = "Blue";
        noOfColor = noOfBlue;
    }
    else if (forColor === 3) {
        color = "Yellow";
        noOfColor = noOfYellow;
    }
    else if (forColor === 4) {
        color = "Grey";
        noOfColor = noOfGrey;
    }
    // console.log(noOfBlue);
    const text = "Pop " + noOfColor + " " + color + " Baloons";
    document.getElementById("text").innerHTML = text;
}


const startGame = () => {
    createBaloons();
    document.getElementById("startGame").style.display = "none";
    // openChat();
}

let counter = 0;
lifes = document.getElementById("lifes")
// lifes.innerHTML = 3;
let getDivs = () => {
    for (let i = 0, len = mainDiv.getElementsByTagName("div").length; i < len; i++) {
        (function (index) {

            mainDiv.getElementsByTagName("div")[i].onmouseover = function () {
                const childDiv = mainDiv.getElementsByTagName("div")[index];
                // let getInt = getRndInteger(1,4);
                console.log(childDiv.style.backgroundColor);
                console.log(color);
                if (childDiv.style.backgroundColor === "rgb(63, 121, 191)") {
                    if (color === "Blue") {

                        counter += 1;
                        percentage = Math.round(100 / noOfBlue * counter);

                        document.getElementById("scoreInc").innerText = percentage + "%";
                        childDiv.style.backgroundColor = "rgba(255, 255, 255, .1)";


                        createSpan(mainDiv.getElementsByTagName("div")[index], blue);

                        if (percentage === 100) {
                            setTimeout(() => {

                                alert("You have cleared first level");
                            }, 1000);
                            document.getElementById("next").style.display = "inline";
                            mainDiv.style.pointerEvents = 'none';
                        }
                    }
                    else {
                        if (lifes.innerText > 0) {
                            alert("You have lost a life")
                            lifes.innerHTML = lifes.innerText - 1
                        }
                        if (lifes.innerText == 0) {
                            alert("You have lost all lifes \r\n Try Again");
                            document.getElementById("tryAgain").style.display = "inline";
                            mainDiv.style.pointerEvents = 'none';
                        }
                    }
                }

                else if (childDiv.style.backgroundColor === "rgb(141, 122, 141)") {
                    if (color === "Grey") {
                        counter += 1;
                        percentage = Math.round(100 / noOfGrey * counter);

                        document.getElementById("scoreInc").innerText = percentage + "%";
                        childDiv.style.backgroundColor = "rgba(255, 255, 255, .1)";


                        createSpan(mainDiv.getElementsByTagName("div")[index], grey);

                        if (percentage === 100) {
                            setTimeout(() => {

                                alert("You have cleared first level");
                            }, 1000);
                            document.getElementById("next").style.display = "inline";
                            mainDiv.style.pointerEvents = 'none';
                        }
                    }
                    else {
                        if (lifes.innerText > 0) {
                            alert("You have lost a life")
                            lifes.innerHTML = lifes.innerText - 1
                        }
                        if (lifes.innerText == 0) {
                            alert("You have lost all lifes \r\n Try Again");
                            document.getElementById("tryAgain").style.display = "inline";
                            mainDiv.style.pointerEvents = 'none';
                        }
                    }

                }

                //Red
                else if (childDiv.style.backgroundColor === "rgb(254, 48, 0)") {
                    if (color === "Red") {

                        counter += 1;
                        percentage = Math.round(100 / noOfRed * counter);

                        document.getElementById("scoreInc").innerText = percentage + "%";
                        childDiv.style.backgroundColor = "rgba(255, 255, 255, .1)";


                        createSpan(mainDiv.getElementsByTagName("div")[index], red);

                        if (percentage === 100) {
                            setTimeout(() => {

                                alert("You have cleared first level");
                            }, 1000);
                            document.getElementById("next").style.display = "inline";
                            mainDiv.style.pointerEvents = 'none';
                        }
                    }
                    else {

                        if (lifes.innerText > 0) {
                            alert("You have lost a life")
                            lifes.innerHTML = lifes.innerText - 1
                        }
                        if (lifes.innerText == 0) {
                            alert("You have lost all lifes \r\n Try Again");
                            document.getElementById("tryAgain").style.display = "inline";
                            mainDiv.style.pointerEvents = 'none';
                        }
                    }

                }


                //Yellow
                else if (childDiv.style.backgroundColor === "rgb(254, 205, 1)") {
                    if (color === "Yellow") {

                        counter += 1;
                        percentage = Math.round(100 / noOfYellow * counter);

                        document.getElementById("scoreInc").innerText = percentage + "%";
                        childDiv.style.backgroundColor = "rgba(255, 255, 255, .1)";


                        createSpan(mainDiv.getElementsByTagName("div")[index], yellow);

                        if (percentage === 100) {
                            setTimeout(() => {

                                alert("You have cleared first level");
                            }, 1000);
                            document.getElementById("next").style.display = "inline";
                            mainDiv.style.pointerEvents = 'none';
                        }
                    }
                    else {
                        if (lifes.innerText > 0) {
                            alert("You have lost a life")
                            lifes.innerHTML = lifes.innerText - 1
                        }
                        if (lifes.innerText == 0) {
                            alert("You have lost all lifes \r\n Try Again");
                            document.getElementById("tryAgain").style.display = "inline";
                            mainDiv.style.pointerEvents = 'none';
                        }
                    }
                }
            }
        })(i);
    }
}


const tryAgain = () => {
    lifes.innerHTML = 3;
    window.location.replace("./")
}


const logout = () => {
    firebase.auth().signOut().then(() => {
        window.location.replace("./Login.html")
      }).catch((error) => {
        // An error happened.
      });
}