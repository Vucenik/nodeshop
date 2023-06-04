/*
cart_route_naruci.js
Node Shop
Vlatko Vučenik
Last Modified:04.06.2023 11:00
*/

const node_session = require('../server/session');


const cart_route_naruci = (req, res) => {


    const session_id = node_session.session_start(req);
    const session = node_session.session();

    session.set('kosarica', []);

    res.statusCode = 302;
    res.setHeader('Location', '/kosarica');
    res.end();

    res.on('error', x => {

        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Dogodila se greška 404</h1>", "utf-8");
        console.log(x)
    });



};

module.exports = cart_route_naruci;