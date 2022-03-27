# Conversion-monedas-node.js

En este caso, aprovechando mis primeros pasos con Javascript y Node.js, realice un aplicacion de consola
en la cual podremos realizar conversiones de monedas.

Los paquetes utilizados en este caso son: 

'colors' para darle estilo a la aplicacion

'inquirer' para trabajar con un menu interactivo y facilitar validaciones.

'axios' para realizar peticiones Http, en el caso de esta aplicacion a la API https://exchangeratesapi.io/

Deberemos generar una API Key en la URL expuesta anteriormente para poder utilizar los endpoints disponobles en dicha API.

En mi caso al generar una API Key con una suscripcion gratuita, solo pude tener acceso a algunos endpoints, que describire en
breve.

Se nos presentara un menu con las siguientes opciones:


? ¿Qué desea hacer? (Use arrow keys)

>  1. Listar codigos moneda
  
   2. Cotizar
  
   0. Salir

Gracias a inquirer vamos a poder desplazarnos por dicho menu tanto con los numeros, asi como tambien con las teclas abajo y arriba. Si ingresamos un numero fuera de esa lista no podremos avanzar, hasta que ingresemos un numero valido.

Si ingresamos a la opcion 1, podremos acceder a un listado con los codigos de moneda, con su correspondiente descripcion.

Aqui un ejemplo:

  AED: 'United Arab Emirates Dirham',  
  AFN: 'Afghan Afghani',
  ALL: 'Albanian Lek',
  AMD: 'Armenian Dram',
  ANG: 'Netherlands Antillean Guilder',
  AOA: 'Angolan Kwanza',
  
  
Conociendo los codigos, podremos ir a la opcion 2 para Cotizar, es decir realizar la conversion de una moneda a otra.

Se nos pedira ingresar los codigos de moneda, y la cantidad a convertir, como vemos a continuacion:


? ¿Qué desea hacer? 2. Cotizar       
? Ingrese codigo de moneda inicial:  ars
? Ingrese cantidad a convertir:  300     
? Ingrese codigo de moneda a convertir:  usd





