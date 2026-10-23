import {  Tarea } from '../Entities/Tarea';

export class repositoryTareas {

  /*
  Funcion que devuelve un array de tareas. El array es estático de prueba
* Pre: ninguna
* Post: el array nunca va a estar vacio
* @returns Tareas[]
* */



  public static getTareas(): Tarea[] {
    return [
      new Tarea(1, 'Tarea1'),
      new Tarea(2, 'Tarea2'),
      new Tarea(3, 'Tarea3'),
      new Tarea(4, 'Tarea4'),
    ];
  }
}