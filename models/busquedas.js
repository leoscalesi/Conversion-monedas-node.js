const axios = require('axios');


class Busquedas {

    
    async listarCodigosMoneda (){
        
        try
        {
            const instance = axios.create({
                baseURL: `http://api.exchangeratesapi.io/v1/symbols?access_key=bad25c3c4fe16c58675fdeb25c96fc06`,
                
            });

            const resp = await instance.get();
            
            const { symbols } = resp.data;

            return symbols;

        }

        catch (error){

        }
        
    }

    async listaCotizaciones (){
        
        try
        {
            const instance = axios.create({
                baseURL: `http://api.exchangeratesapi.io/v1/latest?access_key=bad25c3c4fe16c58675fdeb25c96fc06`,
                
                
            });

            const resp = await instance.get();
            
            const { rates } = resp.data;

            
            return rates;
            
            
        
        }

        catch (error){

        }
        
    }

    
}

module.exports = Busquedas;
