/*
cart.js
Node Shop
Vlatko Vučenik
Last Modified:04.06.2023 11:00
*/

const data = require('../data/data.js');
const header = require('./partial.header.js');
const cart = (podaci = {
    id_katalog: 0,
    title: 'Cart-Node Shop',
    naslov_kategorije: 'Košarica',
    ukupno_kosarica: 0,
    katalog: data.categories,

    kosarica: [], //iz session
    ukupni_iznos: 0

}) => {





    const cart = `
   ${header(podaci)}
    <main>
        <aside>

          <nav>
          <h3>Katalog</h3>
            <ul id="kategorije">
            
              
           
${(podaci.katalog.reduce((ak, val, ind) => {
        ak = ak + `<li><a href="/home?katalog=${ind}" > ${val.name}</a></li> `;
        return ak;
    }
        , ''))}    
            
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
        <table>
    <caption> Pregled košarice</caption>
    <thead>
        
        <th>
            Opis
        </th>
        <th>
            Cijena
        </th>
        <th>
            Količina
        </th>
        <th>
            Ukupno
        </th>
        <th>
            Briši
        </th>
    </thead>
    <tbody id="kontejner_tablica">

        ${(
            podaci.kosarica.reduce((ak, artikl) => {
                ak = ak + `
        
                <tr>
                <td>
                ${artikl.name}
            </td>
            <td>
                ${artikl.cijena}'&nbsp;€
            </td>
            <td>
           
             ${artikl.kolicina}
             <span class="gore-dolje"> 
             <a href="/cart/add?id_proizvod=${artikl.id_product}">&#9650; </a>
              <a href="/cart/reduce?id_proizvod=${artikl.id_product}">&#9660; </a>
              
              </span>
            </td>
            <td>
            ${(artikl.cijena * artikl.kolicina).toFixed(2)}&nbsp;€
               </td>
               <td>
              
              <a class="brisi" href="/cart/remove?id_proizvod=${artikl.id_product}">Briši</a>
            
               </td>
            </td>
            </tr>
                     
                `
                return ak
            }, '')
        )

        }
    </tbody>
    <tfoot>
        <tr>
            <td>Ukupno</td>
            <td id="tablica_ukupno" colspan="2">   ${podaci['ukupni_iznos'].toFixed(2)} &nbsp;€</td>
        </tr>
        <tr>
            <td colspan="5">
            <a class="brisi" href="/naruci">Naruči</a>
            </td>
        </tr>
    </tfoot>
</table>
        </section>
    </main>
</body>
</html>
    
    `

    return cart;

}

module.exports = cart;