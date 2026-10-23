import { repositoryTareas } from "@/Models/Data/repositoryTareas";
import { Tarea } from "@/Models/Entities/Tarea";


export class TareaViewModel {
  private _tarea:  Tarea[]; 

  constructor(){
    this._tarea = repositoryTareas.getTareas();
  }

  //Get tareas 
  public get tareas() : Tarea[]{
    return this._tarea;
  }



}

