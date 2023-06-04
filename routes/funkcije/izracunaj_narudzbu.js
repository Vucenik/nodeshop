const izracunaj_narudzbu=(kosarica=[])=>{
    return kosarica.reduce((ak,val)=>{
        return ak+(val.cijena*val.kolicina);
    },0)
}
module.exports=izracunaj_narudzbu;