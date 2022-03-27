

class Calculos {


    async buscaCotizacion (arrayCodigos,arrayCotizaciones,moneda) {

        let posicion;
                
        for (let i = 0; i < arrayCodigos.length; i++){
    
            if(arrayCodigos[i] === moneda){
    
                posicion = i;
            }
        }
    
        const cotizacionMoneda = arrayCotizaciones[posicion];
        
        return cotizacionMoneda;
    
    }


    async calcularConversion (cotizacionInicial,cantidad,cotizacionFinal){

        //Las cotizaciones que da la API usan como base el euro

        let euroFinal = cantidad/cotizacionInicial;

        let conversion = euroFinal*cotizacionFinal;

        return conversion;

    }

}


module.exports = Calculos;