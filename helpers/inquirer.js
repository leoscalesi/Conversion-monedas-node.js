const inquirer = require('inquirer')
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${ '1.'.green } Listar codigos moneda`
            },
            
            {
                value: 2,
                name: `${ '2.'.green } Cotizar`
            },
            
            {
                value: 0,
                name: `${ '0.'.green } Salir`
            },
            
        ]
    }
];

const leerInputCodigoMoneda = async( message ) => {  //En message va lo que se le quiere mostrar al usuario, asi se da cuenta lo que tiene que hacer

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 || value.length > 3) {
                    
                    console.log('Por favor ingrese un codigo de moneda valido')
                    return false;
                    //return 'Por favor ingrese un codigo de moneda valido';

                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}


const leerInputCantidad = async( message ) => {  //En message va lo que se le quiere mostrar al usuario, asi se da cuenta lo que tiene que hacer

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 || value < 0) {
                    
                    console.log('Cantidad a convertir invalida')
                    return false;
                    //return 'Por favor ingrese un codigo de moneda valido';

                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}



const inquirerMenu = async() => {

    console.clear();
    console.log('=========================='.green);
    console.log('  Cotizacion de monedas  '.white );
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}



const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInputCodigoMoneda,
    leerInputCantidad
    
}