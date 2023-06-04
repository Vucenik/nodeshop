
const produkt_u_kosarici2 = (kosarica=[],id_product)=>{
    let rezultat=[false];
    for(let i=0;i<kosarica.length;i++){
        if(id_product===kosarica[i].id_product){
            rezultat=[true,i];
            break;
        }
    }
    return rezultat;
}
module.exports=produkt_u_kosarici2;