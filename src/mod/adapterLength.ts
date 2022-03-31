
import {MetricLength} from './metricLength';
import {ImperialLength} from './imperialLength';

/**
 * Clase adaptadora de sistema imperial de longitud a sistema metrico de longitud, para seguir el patron adapter
 * extiende a la clase MetricLength, "interfaz" de nuestro sistema final.
 */
export class AdapterLength extends MetricLength {
  /**
   * Constructor que recibe un ImperialLength del que se sacaran los valores para transformar a metrico.
   * El super se inicializa a los valores default ya que no se conocen los valores hasta que se realize la transformacion
   * @param imperialSystem Objeto ImperialLength
   */
  constructor(private imperialSystem: ImperialLength) {
    super();
  }
  /**
  * Metodo "General" el cual realiza la conversion de sistema imperial a sistema metrico, en este caso de longitud. Recoge
  * los valores del sistema imperial y realiza la conversion a sistema metrico, haciendo uso del tipo "anotacion yd, pie, plg"
  */
  transformImperialToMetric() {
    const length2Convert: number = this.imperialSystem.getLength();
    const type2Convert: string = this.imperialSystem.getType();
    switch (type2Convert) {
      case 'plg':
        this.setLength(length2Convert*2.54);
        this.setType('cm');
        break;
      case 'pie':
        this.setLength(length2Convert*0.3048);
        this.setType('m');
        break;
      case 'yd':
        this.setLength(length2Convert*0.9144);
        this.setType('m');
        break;
      case 'mi':
        this.setLength(length2Convert*1.6093);
        this.setType('km');
        break;
      case 'nmi':
        this.setLength(length2Convert*1.853);
        this.setType('km');
        break;
    }
  }
}
