
import {MetricMass} from './metricMass';
import {ImperialMass} from './imperialMass';

/**
 * Clase adaptadora que extiende a MetricMass para poder pasar de sistema imperial a sistema metrico, extiende al sistema metrico para cumplir con el patron de diseño
 * de adapter.
 */
export class AdapterMass extends MetricMass {
  /**
   * Constructor que recibe un ImperialMass para realizar la conversion de sistema imperial a sistema metrico
   * @param imperialSystem Clase ImperialMass
   */
  constructor(private imperialSystem: ImperialMass) {
    super();
  }
  /**
   * Metodo "General" el cual realiza la conversion de sistema imperial a sistema metrico, en este caso de masa. Recoge
   * los valores del sistema imperial y realiza la conversion a sistema metrico, haciendo uso del tipo "anotacion lb, oz, piedra"
   */
  transformImperialToMetric() {
    const mass2Convert: number = this.imperialSystem.getMass();
    const type2Convert: string = this.imperialSystem.getType();
    switch (type2Convert) {
      case 'oz':
        this.setMass(mass2Convert*28.35);
        this.setType('g');
        break;
      case 'lb':
        this.setMass(mass2Convert*0.4536);
        this.setType('kg');
        break;
      case 'piedra':
        this.setMass(mass2Convert*6.3503);
        this.setType('kg');
        break;
      case 'cwt':
        this.setMass(mass2Convert*50.802);
        this.setType('kg');
        break;
      case 't':
        this.setMass(mass2Convert*1.016);
        this.setType('t');
        break;
    }
  }
}
