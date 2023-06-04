const header = (podaci={
  
    title:'Home-Node Shop',
    naslov_kategorije:'Plišanci',
   
})=>{


    const header = `
    <!DOCTYPE html>
<html lang="hr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Demo NODE SHOP">
  <meta name="keywords" content="shop,žlundrići">
   
  <link rel="stylesheet" href= 'styles/shop_screen.css'>
 
 
  <link href=/favicon.ico' rel="icon">
  <link rel="icon" href='/favicon.ico' type="image/x-icon">
 
  <title>${podaci.title??'Node Shop'}</title>
</head>
<body>
    <header>
    <a href='/'  aria-label="home" class="logo"></a>
        <h2 id="naslov_kategorija">${podaci.naslov_kategorije??'Home'}</h2>
        <ul>
            <li><a href='/kosarica'> <span id="cart-span" class="prikaz-span">${podaci.ukupno_kosarica}</span></a></li>
            <li></li>
        </ul>
    </header>
`
return header;
}
module.exports=header;