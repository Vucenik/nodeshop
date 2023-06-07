/*
index.js
Node Shop
Vlatko Vučenik
Last Modified:04.06.2023 14:00
*/


// zavisnosti


const http = require('http');
const provjeri_mime = require('./server/provjeri_mime.js');
const mapirana_stranica = require('./server/mapirana_stranica.js');
const napravi_ruter = require('./server/napravi_ruter.js');
const server_obrada = require('./server/server_obrada.js');


/**************Rute***********/
const home_route = require('./routes/home_route.js');
const cart_route = require('./routes/cart_route.js');
const cart_route_povecaj = require('./routes/cart_route_povecaj.js')
const cart_route_smanji = require('./routes/cart_route_smanji.js')
const cart_route_brisi = require('./routes/cart_route_brisi.js')
const cart_route_naruci = require('./routes/cart_route_naruci.js')


//***************Konstante*****************/

const port = process.env.PORT || 5020;
//const host = process.env.HOST||'localhost';
const site_folder = "/";

// kostante 
//process.env.ROOT = process.env.PWD+"/";
process.env.ROOT = process.env.PWD + "/public";

//******************RUTER *************/


// na ruteru se unose putanje i pridružuju funkcije koje će se izvršiti metode su add i obradi_rutu
const ruter = napravi_ruter();


// za shop 2 statički prikaz Lab 1
ruter.add('/shop2', mapirana_stranica('/index.html'));

// za node shop samo server rendering Lab 2
ruter.add('/', home_route);
ruter.add('/home', home_route);
ruter.add('/kosarica', cart_route);
ruter.add('/cart/add', cart_route_povecaj);
ruter.add('/cart/reduce', cart_route_smanji);
ruter.add('/cart/remove', cart_route_brisi);
ruter.add('/naruci', cart_route_naruci);



/****************SERVER*********************** */



const server = http.createServer(server_obrada(ruter, provjeri_mime));





server.listen(port, () => {
    console.log(`Server je na http://localhost: ${port}`);
})






