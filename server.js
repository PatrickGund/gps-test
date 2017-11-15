const path = require('path');
const express = require('express');
const app = express();
const gps = require('gps-util');
const router = require('express').Router();

const { gpxParseFile } = gps;
const filename = './example2.gpx';

// app.listen() returns an http.Server object
// http://expressjs.com/en/4x/api.html#app.listen
const server = app.listen(1337, function () {
    console.log(`Listening on http://localhost:${server.address().port}`);
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/gps', (req, res, next) => {

const gpscb = (err, res) => {
    if (err) console.error(err);
    else {
    const arr = [];
    res.forEach(point => {
        let lat = point.lat;
        let lon = point.lng;
        arr.push({ lat: lat, lon: lon })
    })
    console.log(arr);
  }
}
const init = () => {
    return gpxParseFile(filename, gpscb);
}

async function run() {
    const a = await init();
return router.get(`https://maps.googleapis.com/maps/api/js?key=YAIzaSyCcF35bbRWUQbTvP4t7XkY62MS5JDJ_oZk&callback=a`, (req, res, next) => {
    console.log(res);
})
}


})
