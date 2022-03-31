/**
 * Clase que modela un valor de masa del sistema Imperial
 */
export class ImperialMass {
  /**
  * Constructor con valor numerico y la notacion que corresponde a ese valor
  * @param mass Valor numerico
  * @param type "notacion o escala del propio sistema"
  */
  constructor(private mass:number, private type:string) {
  }
  /**
   * Getter del valor de masa
   * @returns Atributo mass
   */
  getMass():number {
    return this.mass;
  }
  /**
   * Getter de la notacion del valor de la masa
   * @returns Notacion del valor de la masa
   */
  getType():string {
    return this.type;
  }
}
