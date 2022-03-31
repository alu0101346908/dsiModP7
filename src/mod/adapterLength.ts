
import {MetricLength} from './metricLength';
import {ImperialLength} from './imperialLength';


export class AdapterLength extends MetricLength {
  constructor(private imperialSystem: ImperialLength) {
    super();
  }
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
