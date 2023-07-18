const express = require('express');
const app = express();

app.use(express.json());


//Complete below given Middleware function which check whether number provided in api as params is odd or Even.

function CheckisOdd(req, res, next) {
    
    //Write Your Code here

}


//Complete below given Middleware function which adds 2 to a number provided in api as params.

function add2(req, res, next) {
    
    //Write Your Code here

}

/*

Example :- 
GET Reqest of API  '/?num=18' --> The router should return {"num": "20","isOdd":false}

*/

app.get('/', add2, CheckisOdd, (req, res) => {

    //num in data should be replaced by (num query + 2) from the get request route
    //isOdd in data should be replaced by whether (num query + 2) is odd or even if it odd make it true else false 
    const data = {
        "num" : "20",
        "isOdd" : false
    };
    res.send(JSON.stringify(data));
});

module.exports = app;

