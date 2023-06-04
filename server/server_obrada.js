/*
server_obrada.js
Node Shop
Vlatko Vučenik
Last Modified:04.06.2023 13:00
*/


const fs = require('fs');
const url = require('url');
const path = require('path');
//////////////////////////Funkcija upi i odgovor servera///////////////////////////////   


const server_obrada = (ruter, provjeri_mime) => (req, res) => {

    const url1 = url.parse(req.url);

    const ruta = url1.pathname;

    //dohvati se fukcija koja obrađuje događaj prema ruti
    const funkcija_obrade = ruter.obradi_rutu(ruta)

    if (typeof (funkcija_obrade) === "function") {
        funkcija_obrade(req, res);
        // nakon obrade vrati da nbi se daljnje obrade
        return;

    };


    ///////////////////////////////

    const putanja = path.parse(req.url);
    const name = (ruta === "") ? "/" : ruta;
    const ext = putanja.ext;

    res.statusCode = 200;
    res.setHeader("Content-Type", provjeri_mime(ext));
    const stream_html = fs.createReadStream(process.env.ROOT + name);

    stream_html.pipe(res);

    stream_html.on('error', () => {


        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Dogodila se greška 404</h1>", "utf-8");
    })

    // 
    //////////////////////
};
module.exports = server_obrada;