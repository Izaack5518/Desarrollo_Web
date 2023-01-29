let playeras = [{equipo: 'Barcelona', stock: 36, precio: 170.80},
{equipo: 'Chelsea', stock: 50, precio: 150.80},
{equipo: 'Liverpool', stock: 300, precio: 138.20},
{equipo: 'Inglaterra', stock: 78, precio: 900.65},
{equipo: 'Alemania', stock: 23, precio: 800.80},

];
//NOMBRE DEL EQUIPO 
const equipos = playeras.map(elemento => elemento.equipo);
console.log(equipos);

//PRODUCTOS QUE CUESTAN ARRIBA DE 200
const precio = playeras.filter(elemento => elemento.precio>200)
console.log(precio);
//PROMEDIO DE LOS PRODUCTOS
const suma = playeras.map(item => item.precio);

const promedio = suma.reduce((anterior, actual)=> anterior + actual);
console.log(promedio/ 4);

//ORDEN ALFABETICO DEL EQUIPO
playeras.sort((a,b)=>{
    if(a.equipo == b.equipo){
        return 0;
    }if (a.equipo < b.equipo){
        return -1;
    }
    return 1;
})
    console.log(playeras);
//MAYOR PRECIO DE LAS PLAYERAS Y SU REDONDEO

    let precioMax = 0;

playeras.forEach(elemento =>{
    precioMax = Math.max(elemento.precio, precioMax);
    redondeo = Math.round(precioMax);
});

console.log('El mayor precio es: ', precioMax, 'Su redondeo es: ',redondeo);
