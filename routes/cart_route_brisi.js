/*
cart_route_brisi.js
Node Shop
Vlatko Vučenik
Last Modified:04.06.2023 11:00
*/

const url = require('url');

const node_session = require('../server/session');

const produkt_u_kosarici2 = require('./funkcije/product_u_kosarici2');



const cart_route_brisi = (req, res) => {


    const session_id = node_session.session_start(req);
    const session = node_session.session();

    const url1 = url.parse(req.url);


    const upiti = new URLSearchParams(url1.query);

    let kosarica = session.get('kosarica');

    const id_product = upiti.get('id_proizvod');

    const u_kosarici = produkt_u_kosarici2(kosarica, id_product)

    if (u_kosarici[0]) {

        kosarica = kosarica.filter(x => x.id_product != id_product);

    }

    session.set('kosarica', kosarica);


    res.statusCode = 302;
    res.setHeader('Location', '/kosarica');
    res.end();

    res.on('error', x => {

        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Dogodila se greška 404</h1>", "utf-8");
        console.log(x)
    });



};

module.exports = cart_route_brisi;