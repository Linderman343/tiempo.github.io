let fecha = new Date()
let actual = fecha.toLocaleString()
let presente = `${fecha.getMonth() + 1}/${fecha.getDate()}/${fecha.getFullYear()}`
var timeStart = new Date(presente);
var timeEnd = new Date("09/06/2024");
// mm-dd-year
var actualDate = new Date();

//Dias totales
let cal = timeEnd.getTime() - timeStart.getTime();
let diasTeoria = Math.round(cal / (1000 * 60 * 60 * 24)) - 1;
document.getElementById("dias").innerHTML = diasTeoria

let porcentaje = diasTeoria * 100 / 613
porcentaje = Math.trunc(porcentaje)
document.getElementById("por_trans").innerHTML = `${100 - porcentaje}%`

document.getElementById("por_falt").innerHTML = `${porcentaje}%`

document.getElementById("fachero").innerHTML += `
<style>
#transcurrido{
    width: ${100 - porcentaje}%    
}
    #faltante{
        width:${porcentaje}%;

    }
</style>
` 
document.getElementById("pasaron").innerHTML = `(Pasaron ${613 - diasTeoria} dias de 613 :3)`
/*
function calculardiasDiscount() {
    //Cantidad de dias

    let a = timeStart.getMonth() + 2
    let hola = a + "/01/2023"
    var timeEndDias = new Date(hola);
    var diff = timeEndDias.getTime() - timeStart.getTime();
    var DiasTotales = Math.round(diff / (1000 * 60 * 60 * 24));

        
//          ==========/// Cantida de Meses ///==========
        let timeEndMouth = new Date("12/15/2023");
        let diff_mouth = timeEndMouth.getTime() - timeStart.getTime();

//          ==========/// Cantida de Dias ///==========

        let MesesTotales = 12 - timeStart.getMonth()
        document.getElementById("tiempo_res_dias").innerHTML = `${DiasTotales + 1} Dias`
    
        if (diasTeoria > 365) {
            document.getElementById('tiempo_res_año').innerHTML = `1 Año `
            document.getElementById('tiempo_res_meses').innerHTML = `${MesesTotales} Meses (Dias totales ${diasTeoria})`
            }



}
*/


console.log(calculardiasDiscount())
// Nota : datos de fecha (mes//dias//año)
