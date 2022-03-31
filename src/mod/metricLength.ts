
/**
 * Clase que modela un valor del sistema metrico de longitud
 */
export class MetricLength {
  /**
   * Constructor con valor por defecto a 0 y '' para cargar los resultados del adapter posteriormente
   * @param length Valor numerico
   * @param type "notacion o escala del propio sistema"
   */
  constructor(private length: number = 0, private type:string = '') {

  }
  /**
   * Getter del atributo length
   * @returns Devuelve el valor numerico de la longitud
   */
  getLength(): number {
    return this.length;
  }
  /**
   * Setter del atributo length
   * @param length Valor a setear en el atributo length
   */
  setLength(length: number) {
    this.length = length;
  }
  /**
   * Gettter de la notacion del valor de la clase
   * @returns Notacion type
   */
  getType():string {
    return this.type;
  }
  /**
   * Setter del parametro de la clase type
   * @param type notacion del valor de length
   */
  setType(type:string) {
    this.type = type;
  }
}
