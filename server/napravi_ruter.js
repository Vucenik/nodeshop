const napravi_ruter=()=>{
    ob={};
   const add = (ruta='/home',fc)=>Object.assign(ob,{[ruta]:fc});
   const obradi_rutu = (ruta)=>ob[ruta];
   const daj_unos =()=>console.log(ob);
   return{add,obradi_rutu,daj_unos}
};
module.exports =napravi_ruter;