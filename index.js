const express = require('express');
const cors = require('cors');
const app = express(); //creates instance of web server (express)

app.use(cors()); //uses "cors" middleware installed using "npm install cors" to allow a user to be able to see this link (localhost)

//creates an array of games! "Games" will be an displayed as objects.
let gamesBase = {
    "count": "3",
    "games": [
        {
            "name": "Super Mario Brothers",
            "rating": "E",
            "director": "Shigeru Miyamoto"
        },
        {
            "name": "Metal Gear Solid",
            "rating": "T",
            "director": "Hideo Kojima"
        },
        {
            "name": "Starfield",
            "rating": "M",
            "director": "Todd Howard"
        },
    ]
};




/* ROUTING */
//get function on the app which takes a request and response objects. Sends message out to root directory (home page)
app.get('/', (req, res) => {
    res.send('Hello To the world out there');
})

//get function on the app which sends out HTML and logs a message to the console when going to "/games" directory. 
/* NOTE: "/games" is 'created' right here in the app.get on line 14. You won't find an "index.html/games" as one doesn't exist */
app.get('/games', (req, res) => {
    res.send(`<a href="http://www.youtube.com">This link</a> will take you to youtube`);
    console.log(`Just hanging out here on the console. What's going on! Playing any games?`);
})


app.get('/games/:rating', (req, res) => {
    let rating = req.params.rating; //sets the value of ":rating" to the "director" value
    let game = gamesBase.games.find(theGame => theGame.rating == rating); //searches GameBase's "games" array of objects to find rating matching the /:rating parameter
    
    if(game){
        res.send(JSON.stringify(game)); //outputs result in a JSON string
    }else{
        res.status(404).send(JSON.stringify({
            "error": {
                "message": `We're sorry, there aren't any games with a ${rating} rating.`
            } 
        }))
    }
})

//run server and listen to particular port for a request
app.listen(5000, () => {
    console.log("Express is now listening...on port 5000");
})