const { stdin } = require('process');

require('colors');

const mostrarMenu = ()=> {
    console.clear();
    console.log('============================'.green);console.log('   Seleccione Una Opcion'.green);
    console.log('============================\n'.green);

    // Creacion del Menu

    console.log(`${'1.'.green} Crear Tarea`);
    console.log(`${'2.'.green} Listar Tareas`);
    console.log(`${'3.'.green} Listar Tareas Completadas`);
    console.log(`${'4.'.green} Listar tareas Pendientes`);
    console.log(`${'5.'.green} Completar Tarea(s)`);
    console.log(`${'6.'.green} Borrar Tarea`);
    console.log(`${'0.'.green} Salir\n`);
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione una Opcion:',(opt)=>{
        readline.close();

    });

};

const pausa = () => {
        
        const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPresione ${'ENTER'}.green para continuar:\n`,(opt)=>{
       
        readline.close();

    });

}
      
module.exports = {
    mostrarMenu,
    pausa
}