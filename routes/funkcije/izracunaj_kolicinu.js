const izracunaj_kolicinu = (kosarica=[])=>{
    return kosarica.reduce((ak,val)=>{
        return ak+val.kolicina;
    
    },0)
}
module.exports=izracunaj_kolicinu;