
/*
home.js
Node Shop
Vlatko Vučenik
Last Modified:04.06.2023 11:00
*/

const data = require('../data/data.js');
const header = require('./partial.header.js');

const home = (podaci={
    id_katalog:0,
    title:'Home-Node Shop',
    naslov_kategorije:'Plišanci',
    ukupno_kosarica:0,
    katalog:data.categories,
    proizvodi:data.categories[0].products

})=>{


    const home = `
   ${header(podaci)}
    <main>
        <aside>

          <nav>
          <h3>Katalog</h3>
            <ul id="kategorije">
            
              
           
${(podaci.katalog.reduce((ak,val,ind)=>{
    ak=ak+`<li><a href="/home?katalog=${ind}" > ${val.name}</a></li> `;
    return ak;
  }
  ,''))}    
            
            </ul>
          </nav>
          <nav>
         
            <ul>
                <li><a href="http://shop.vlatko.info/">VanilaJs Shop</a></li>
                <li><a href="http://shop.vlatko.live/">ReactJs Shop</a></li>
                <li><a href="http://phpshop.vlatko.live/">PHP Shop</a></li>
                <li><a href="mailto:vlatko.vucenik@gmail.com">Kontakt</a></li>
            </ul>
          </nav>
        </aside>
        <section class="pozdrav">
            <h3>
              Web šop sa šarenim igračkama
            </h3>
        </section>
        <section class="proizvodi" id="kontejner_proizvoda">
         ${(
            podaci.proizvodi.reduce((ak,proizvod,key)=>{
                ak = ak+ ` 
               
                  
                  
              <figure class="proizvod">
                      <div class="flip">
                          <a  href="home?katalog=${podaci.id_katalog}&id_proizvod=${proizvod.id_product}">Dodaj</a>
                          <img src="images/${proizvod.image}" alt="${proizvod.name}">
                       
            
                      </div>
                      <figcaption>
                       
                          <span>${proizvod.name}</span>
                          <span>${proizvod.cijena} € </span>
                          <span class="prikaz-span"> ${proizvod.kolicina??0}</span>
                          </figcaption>
                  </figure>
                  
                
            
                  `;
                return ak;
             }
            
             ,'')
         )}
        </section>
    </main>
</body>
</html>
    
    `

    return home;
    
}

module.exports = home;