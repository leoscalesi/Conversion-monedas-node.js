require('colors');
const { inquirerMenu, pausa, leerInputCodigoMoneda, leerInputCantidad } = require('./helpers/inquirer.js');
const Busquedas = require ('./models/busquedas.js');
const Calculos = require ('./calculos/calculos.js');


const main = async () => {

    let opt = '';

    const busquedas = new Busquedas();
    const calculos = new Calculos();
    
    do {
        
        // Imprimir el menú, y en opt tengo la opcion ingresada por el usuario
        opt = await inquirerMenu();

        switch ( opt ){

            case 1: //Lista codigos moneda

               const listaCodigosMoneda = await busquedas.listarCodigosMoneda();

               console.log(listaCodigosMoneda);

            break;

            case 2:  //Conversion
                
                const codigoMonedaInicial = await leerInputCodigoMoneda('Ingrese codigo de moneda inicial: ');
                const cantidadAConvertir = await leerInputCantidad('Ingrese cantidad a convertir: ');
                const codigoMonedaFinal = await leerInputCodigoMoneda('Ingrese codigo de moneda a convertir: ');
                
                
                const listaCotizaciones = await busquedas.listaCotizaciones();
                
                //Extraer el key y el value de la listaCotizaciones para tener un Array
                //con las keys y otro con las cotizaciones

                const arrayCodigos = Object.keys(listaCotizaciones);
                const arrayCotizaciones = Object.values(listaCotizaciones);

                
                const cotizacionMonedaInicial = await calculos.buscaCotizacion(arrayCodigos,arrayCotizaciones,codigoMonedaInicial.toUpperCase());
                const cotizacionMonedaFinal = await calculos.buscaCotizacion(arrayCodigos,arrayCotizaciones,codigoMonedaFinal.toUpperCase());
                
                const conversion = await calculos.calcularConversion(cotizacionMonedaInicial,cantidadAConvertir,cotizacionMonedaFinal);
                
                console.clear();
                console.log(`${cantidadAConvertir} ${codigoMonedaInicial} equivalen a ${conversion} ${codigoMonedaFinal}`.magenta);
            
            break;
            
            
            case 0:  //Salir

            break;
        
        
        }
        
        if ( opt !== 0 ) await pausa();
    
    } while( opt !== 0 );

}


main();