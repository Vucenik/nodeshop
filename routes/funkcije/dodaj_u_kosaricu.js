const produkt_u_kosarici2 = require('./product_u_kosarici2');

const dodaj_u_kosaricu = (ob,kosarica=kosarica)=>{
   
    const u_kosarici =produkt_u_kosarici2(kosarica,ob.id_product);
    if(u_kosarici[0]){
       const nova_kosarica = [...kosarica];
       nova_kosarica[u_kosarici[1]].kolicina=nova_kosarica[u_kosarici[1]].kolicina +1;
     
      return nova_kosarica;
     
    }else{
   
       return [...kosarica,{name:ob.name,cijena:ob.cijena,id_product:ob.id_product,kolicina:1}];
    }


}
module.exports= dodaj_u_kosaricu;