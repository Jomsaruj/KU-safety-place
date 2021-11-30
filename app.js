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
            url = "https://kuplace.herokuapp.com/ku-place/pmlocation/"+ location_id;
            https.get(url, function(response){
                response.on("data", function(data){
                    const pmData = JSON.parse(data)
                    if (pmData.length > 0){
                        const building = pmData[2].building
                        const pm1 = pmData[2].average_pm // 28
                        const pm2 = pmData[1].average_pm // 27
                        const pm3 = pmData[0].average_pm // 26
                        res.render('result', {location: building, time: "28 พฤษจิกายน 2564", amount: pm1, seven: pm2, six: pm3})
                    }
                    else{
                        res.render('no_data')
                    }
                })
            })
        }
        else if (topic == "Light"){
            url = "https://kuplace.herokuapp.com/ku-place/lightlocation/"+ location_id;
            https.get(url, function(response){
                response.on("data", function(data){
                    const lightData = JSON.parse(data)
                    if (lightData.length > 0){
                        const building = lightData[0].building
                        const time = lightData[lightData.length - 1].time
                        const current_light = lightData[lightData.length - 1].value_light
                        const minus_one = lightData[lightData.length - 2].value_light
                        const minus_two = lightData[lightData.length - 3].value_light
                        const minus_three = lightData[lightData.length - 4].value_light
                        const minus_four = lightData[lightData.length - 5].value_light
                        const minus_five = lightData[lightData.length - 6].value_light
                        res.render('result_light', {location: building, time: time, current: current_light, one: minus_one, two: minus_two, three: minus_three, four: minus_four, five: minus_five})
                    }
                    else{
                        res.render('no_data')
                    }
                })
            })
        }
        else if (topic == "Security"){
            url = "https://kuplace.herokuapp.com/ku-place/securitylocation/"+ location_id;
            https.get(url, function(response){
                response.on("data", function(data){
                    const securityData = JSON.parse(data)
                    if (securityData.length > 0){
                        const number = securityData.length
                        const building = securityData[0].building
                        res.render('result_security', {location: building, current: 1, one: 1, two: 1, three: 1, four: 1, five: 1, number: number, object: securityData})
                    }
                    else{
                        res.render('no_data')
                    }
                })
            })
        }
    }
    else{
        // alert("message")
    }
})

app.listen(process.env.PORT || 8000, function(){
	console.log("Server started on port 8000");
});
