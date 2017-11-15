const gps = require('gps-util');

const { gpxParseFile } = gps;

const filename = './example2.gpx';


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
gpxParseFile(filename, gpscb);