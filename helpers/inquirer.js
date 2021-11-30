const inquirer = require("inquirer");


require('colors');

const preguntas = [{
    type: 'list',
    name: 'opciones',
    message: '¿ Que desea hacer?',
    choices: [{
            value: '1',
            name: '1. Crear Tarea'
        },
        {
            value: '2',
            name: '2. Listar Tareas'
        },
        {
            value: '3',
            name: '3. Listar Tareas Completadas'
        },
        {
            value: '4',
            name: '4. Listar tareas Pendientes'
        },
        {
            value: '5',
            name: '5. Completar Tarea(s)'
        },
        {
            value: '6',
            name: '6. Borrar Tarea'
        },
        {
            value: '0',
            name: '0. Salir'
        }
    ]

}]

const inquirerMenu = async() => {

    console.clear();
    console.log('============================'.green);
    console.log('   Seleccione Una Opcion'.green);
    console.log('============================\n'.green);

    const { opciones } = await inquirer.prompt(preguntas)

    return opciones;

}




const pausa = async() => {

    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} para continuar:`
    }];

    console.log('\n')

    await inquirer.prompt(question);

}

module.exports = {
    inquirerMenu,
    pausa
}