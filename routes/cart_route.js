/*
cart_route.js
Node Shop
Vlatko Vučenik
Last Modified:04.06.2023 11:00
*/


const url = require('url');
const data = require('../data/data.js');
const cart = require('../views/cart');
const node_session = require('../server/session');
const izracunaj_narudzbu = require('./funkcije/izracunaj_narudzbu.js');
const izracunaj_kolicinu = require('./funkcije/izracunaj_kolicinu.js');



const cart_route = (req, res) => {


    const session_id = node_session.session_start(req);
    const session = node_session.session();

    const url1 = url.parse(req.url);


    const upiti = new URLSearchParams(url1.query);



    const podaci = {
        id_katalog: 0,
        title: 'Košarica-Node Shop',
        naslov_kategorije: 'Košarica',
        ukupno_kosarica: izracunaj_kolicinu(session.get('kosarica')) ?? 0,
        katalog: data.categories,

        kosarica: session.get('kosarica') ?? [], //iz session
        ukupni_iznos: izracunaj_narudzbu(session.get('kosarica')) ?? 0
    }

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Set-Cookie": "node_session_id=" + session_id });
    res.end(cart(podaci));


    res.on('error', x => {

        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Dogodila se greška 404</h1>", "utf-8");
        console.log(x)
    });



};

module.exports = cart_route;