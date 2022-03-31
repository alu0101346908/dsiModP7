
import {MetricMass} from './metricMass';
import {ImperialMass} from './imperialMass';

export class AdapterMass extends MetricMass {
  constructor(private imperialSystem: ImperialMass) {
    super();
  }
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
