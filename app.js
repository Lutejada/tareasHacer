require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');




const main = async() => {


    let opt = '';

    do {

        // const tarea = new Tarea('nueva tarea');

        // console.log(tarea);

        // const tareas = new Tareas();
        // console.log(tareas);

        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);

        opt = await inquirerMenu();
        console.log({ opt });

        await pausa();

    }
    while (opt !== '0')

};

main();