const express = require('express');

const app = express(); //creates instance of web server (express)

/*router definition. Used to define different paths (routes) on the api*/
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

//run server and listen to particular port for a request
app.listen(5000, () => {
    console.log("Express is now listening...on port 5000");
})