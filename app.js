const express = require("express");
const https = require("https");
let alert = require('alert'); 
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs')

app.get("/", function(req,res){
    res.sendFile(__dirname + "/home.html")
})

app.post("/", function(req,res){
    const location_id = req.body.location
    const topic = req.body.topic
    if (location_id != 0 && topic != "topic"){
        if (topic == "PM"){
            res.render('result', {location: location_id})
            //url = "http://localhost:8080/rain-api/v1/SecurityLocation/"+ location_id;
        //     https.get(url, function(response){
        //     response.on("data", function(data){
        //         const locationData = JSON.parse(data)
        //         const building = locationData.data.location.building
        //         res.render('result', {cityname: building})
        //     })
        // })
        }
        else if (topic == "Light"){
            url = "http://localhost:8080/rain-api/v1/LightLocation/"+ location_id;
        }
        else if (topic == "Security"){
            url = "http://localhost:8080/rain-api/v1/PMLocation/"+ location_id;
        }
    }
    else{
        // alert("message")
    }
})

app.listen(process.env.PORT || 8000, function(){
	console.log("Server started on port 8000");
});
