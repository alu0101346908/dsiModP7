
/**
 * Clase que modela un valor del sistema metrico de masa
 */
export class MetricMass {
  /**
   * Constructor con valor por defecto a 0 y '' para cargar los resultados del adapter posteriormente
   * @param mass Valor numerico
   * @param type "notacion o escala del propio sistema"
   */
  constructor(private mass:number = 0, private type:string = '') {

  }
  /**
   * Getter del atributo mass
   * @returns Devuelve el valor mass de la clase
   */
  getMass():number {
    return this.mass;
  }
  /**
   * Setter del atributo mass
   * @param mass valor de la masa a asignar al atributo mass
   */
  setMass(mass:number) {
    this.mass = mass;
  }
  /**
   * Getter de la notacion del valor
   * @returns Devuelve la notacion del valor de la clase
   */
  getType():string {
    return this.type;
  }
  /**
   * Setter de la notacion del valor
   * @param type Valor a poner en el atributo type
   */
  setType(type:string) {
    this.type = type;
  }
}
