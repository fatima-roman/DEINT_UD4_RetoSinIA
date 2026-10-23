export class Tarea {
  private _id: number;
  private _titulo: string;
  private _check: boolean;

  constructor(id: number, titulo: string) {
    this._id = id;
    this._titulo = titulo;
    this._check = false;
  }

  // Getters y Setters
  public get id(): number {
    return this._id;
  }

  /*public set id(value: string) {
    this._id = value;
  }*/

  public get titulo(): string {
    return this._titulo;
  }

  public set titulo(value: string) {
    this._titulo = value;
  }

  public get check(): boolean {
    return this._check;
  } 

  public set check(value: boolean) {
    this._check = value;
  }


}