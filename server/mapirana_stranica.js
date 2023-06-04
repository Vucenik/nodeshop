// funkcija mapira proizvoljni url prema stranici u obliku 'folder/stranica.html'
const path = require('path');
const provjeri_mime = require('./provjeri_mime.js');
const fs = require('fs');

const  mapirana_stranica =(url)=>{

    return function(req,res){
        const ruta = req.url;
        
        const putanja = path.parse(ruta);
       
        const ext = putanja.ext;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.statusCode = 200;
    res.setHeader("Content-Type", provjeri_mime(ext));
   // const stream_html = fs.createReadStream(__dirname + site_folder + url);
    const stream_html = fs.createReadStream(process.env.ROOT + url);

    stream_html.pipe(res);

    stream_html.on('error', () => {


        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Dogodila se greška 404</h1>", "utf-8");
    })

    }
}

module.exports = mapirana_stranica;