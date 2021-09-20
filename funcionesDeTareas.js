const fs = require("fs")
let tasks = require("./tareas.json")

const escribirJSON = array => {
  list = JSON.stringify(array, null, 4)
  fs.writeFileSync("./tareas.json", list)
}

const guardarTarea = object => {
  tasks.push(object)
  escribirJSON(tasks)
}

const filtrarPorEstado = estado => {
  return tasks.filter(e => e.estado === estado)
}

const execute = option => {
  switch (option) {
    case "listar":
      tasks.forEach(e => console.log(e))
      //console.log(tasks);
      break;

    case "crear":
      guardarTarea({
        titulo: process.argv[3],
        estado: process.argv[4] || "pendiente"
      })
      break;

      case "filtrar":
        criteria = process.argv[3]
        filtrarPorEstado(criteria).forEach(e => console.log(e))
      break;

    case undefined:
      console.log("Atención - Tienes que pasar una acción.");
      break

    default:
      console.log("No entiendo qué quieres hacer.");
      break;
  }
}

module.exports = execute
