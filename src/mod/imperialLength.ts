
/**
 * Clase que modela un valor de longitud del sistema imperial
 */
export class ImperialLength {
  /**
   * Constructor con valor numerico y la notacion que corresponde a ese valor
   * @param length Valor numerico
   * @param type "notacion o escala del propio sistema"
   */
  constructor(private length:number, private type:string) {
  }
  /**
  * Getter del valor de la longitud
  * @returns Length de la clase
  */
  getLength():number {
    return this.length;
  }
  /**
   * Getter de la notacion del valor de la clase
   * @returns Notacion del valor de la clase
   */
  getType():string {
    return this.type;
  }
}
