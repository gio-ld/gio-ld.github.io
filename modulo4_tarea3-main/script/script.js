//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];







agregarMonitores();

//funcion para agregar listeners a los botones
function agregarMonitores() {

    //listeners del boton mostrar paises
    document.querySelector("#mostrarPaises").addEventListener("click",
    function () {
    mostrarPaises();
    
    });

  


    //listerners para agregar paises
    document.querySelector("#agregarPais").addEventListener("click",
    function () {
        agregarPais();
    });

}


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
let ListaDeBanderas = "";
let igual = "=";
let comillas = '"';

    for(let pais of paises){

        ListaDeBanderas += '<table class="table table-bordered text-center"><tr>';
            for(datosPais in pais){
                if(datosPais == "bandera"){
                    datosPais = null;
                } else{
                      ListaDeBanderas += "<th>" + datosPais   + "</th>";
                }
            }
    
            ListaDeBanderas += '</tr></thead>';

            ListaDeBanderas += '<tbody><tr>';
            for(datosPais in pais){
                if(datosPais == "bandera"){
                    datosPais = null;
                } else{
                      ListaDeBanderas += "\n <td>" + pais[datosPais] + "</td>";
                }
            }
    
            ListaDeBanderas += '</tr>';
    
            ListaDeBanderas += '<tr>';
            for(datosPais in pais){
                if(datosPais == "bandera"){
                    ListaDeBanderas += '\n <td colspan="4">' + '<img src' + igual + comillas + pais[datosPais] + comillas + '>' + '</img>' + "</td>";
                    
                } else{
                    datosPais = null;
                }
            }
    
            ListaDeBanderas += '</tr><tbody</table>';
    
    }
    document.getElementById("paises").innerHTML = ListaDeBanderas;
    
}


function nuevo(){
    let nombre = prompt("Ingrese nombre de Pais");
    if(nombre == null || nombre.length == 0){
        return null;
    }
    if(nombre == +" "){
        return null;
    }

    let bandera = prompt("Ingrese URL imagen de bandera");
    if(bandera === null || bandera.length === 0){
        return null;
    }
    if(bandera == +" "){
        return null;
    }
    if (!/^https?:\/\/.+/.test(bandera)) {
        return null;
      }

    let capital = prompt("Ingrese nombre de Capital");
    if(capital == null || capital.length == 0){
        return null;
    }
    if(capital == +" "){
        return null;
    }

    let idioma_oficial = prompt("Ingrese idioma");
    if(idioma_oficial == null || idioma_oficial.length == 0){
        return null;
    }
    if(idioma_oficial == +" "){
        return null;
    }

    let moneda = prompt("Ingrese moneda");
    if(moneda == null || moneda.length == 0){
        return null;
    }
    if(moneda == +" "){
        return null;
    }

   
    return {'nombre':nombre, 
    'bandera': bandera,
     'capital': capital, 
     'idioma': idioma_oficial, 
     'moneda':moneda
    };
}


//funcion que permite agregar un pais al arreglo
function agregarPais() {
    let masPaise = nuevo();
    paises.unshift(masPaise);
    mostrarPaises();

}

