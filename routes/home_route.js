/*
home_route.js
Node Shop
Vlatko Vučenik
Last Modified:04.06.2023 12:00
*/

const url = require('url');
const data = require( '../data/data.js');
const home = require('../views/home');
const node_session = require('../server/session');
const izracunaj_kolicinu = require('./funkcije/izracunaj_kolicinu');
const dodaj_u_kosaricu = require('./funkcije/dodaj_u_kosaricu');

const home_route = (req, res) => {

    const session_id = node_session.session_start(req);
    const session = node_session.session();
    const url1 = url.parse(req.url);

    const upiti = new URLSearchParams(url1.query);

    const id_katalog = upiti.get('katalog') ? Number.parseInt(upiti.get('katalog')) : 0;

    /// dodaj u kosaricu

    if (upiti.get('id_proizvod') && upiti.get('katalog')) {
        const id_product = upiti.get('id_proizvod');

        const index_product = id_product.split('-').splice(-1)[0];
        const objekt_product = data.categories[id_katalog].products[index_product];

        ///kosarica

        if (session.has('kosarica')) {
            const kosarica = session.get('kosarica');

            session.set('kosarica', dodaj_u_kosaricu(objekt_product, kosarica))


        } else {
            objekt_product.kolicina = 1;

            session.set('kosarica', [objekt_product])

        }

    }

    // update kolicina
    const proizvodi = JSON.parse(JSON.stringify(data.categories[id_katalog].products)).map(x => {
        const id_product = x.id_product;

        const kosarica = session.get('kosarica') ?? [];
        kosarica.forEach(pro => {
            if (pro.id_product === id_product) {
                x.kolicina = pro.kolicina;
            };

        });
        return x;
    });


    const podaci = {
        id_katalog: id_katalog,
        title: 'Home-Node Shop',
        naslov_kategorije: data.categories[id_katalog].name ?? 'Plišanci',
        ukupno_kosarica: izracunaj_kolicinu(session.get('kosarica')),
        katalog: data.categories,
        proizvodi: proizvodi

    }


    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Set-Cookie": "node_session_id=" + session_id });
    res.end(home(podaci));


    res.on('error', x => {

        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Dogodila se greška 404</h1>", "utf-8");
        console.log(x)
    });


};

module.exports = home_route;
