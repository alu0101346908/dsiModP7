import 'mocha';
import {expect} from 'chai';
import {ImperialMass} from '../src/mod/imperialMass';
import {MetricMass} from '../src/mod/metricMass';
import {ImperialLength} from '../src/mod/imperialLength';
import {MetricLength} from '../src/mod/metricLength';
import {AdapterLength} from '../src/mod/adapterLength';
import {AdapterMass} from '../src/mod/adapterMass';

describe('AdapterLength tests', () => {
  const imperialLength1: ImperialLength = new ImperialLength(101, 'plg');
  const imperialLength2: ImperialLength = new ImperialLength(122, 'pie');
  const imperialLength3: ImperialLength = new ImperialLength(15, 'yd');
  const imperialLength4: ImperialLength = new ImperialLength(23, 'milla');
  const adapterLength1: AdapterLength = new AdapterLength(imperialLength1);
  const adapterLength2: AdapterLength = new AdapterLength(imperialLength2);
  const adapterLength3: AdapterLength = new AdapterLength(imperialLength3);
  const adapterLength4: AdapterLength = new AdapterLength(imperialLength4);
  it('Debe realizarse la transformacion correctamente (ImperialLength a MetricLength)', () => {
    adapterLength1.transformImperialToMetric();
    expect(adapterLength1.getMass()).to.be.eq(101*2.54);
    expect(adapterLength1.getType()).to.be.eq('cm');
    adapterLength2.transformImperialToMetric();
    expect(adapterLength2.getMass()).to.be.eq(122*0.3048);
    expect(adapterLength2.getType()).to.be.eq('m');
    adapterLength3.transformImperialToMetric();
    expect(adapterLength3.getMass()).to.be.eq(15*0.9144);
    expect(adapterLength3.getType()).to.be.eq('m');
    adapterLength4.transformImperialToMetric();
    expect(adapterLength4.getMass()).to.be.eq(23*1.6093);
    expect(adapterLength4.getType()).to.be.eq('km');
  });
});

describe('AdapterMass tests', () => {
  const imperialMass1: ImperialMass = new ImperialMass(30, 'oz');
  const imperialMass2: ImperialMass = new ImperialMass(452, 'lb');
  const imperialMass3: ImperialMass = new ImperialMass(20, 't');
  const imperialMass4: ImperialMass = new ImperialMass(60, 'piedra');
  const adapterMass1: AdapterMass = new AdapterMass(imperialMass1);
  const adapterMass2: AdapterMass = new AdapterMass(imperialMass2);
  const adapterMass3: AdapterMass = new AdapterMass(imperialMass3);
  const adapterMass4: AdapterMass = new AdapterMass(imperialMass4);

  it('Debe realizarse la transformacion correctamente (ImperialMass a MetricMass)', () => {
    adapterMass1.transformImperialToMetric();
    expect(adapterMass1.getMass()).to.be.eq(30*28.35);
    expect(adapterMass1.getType()).to.be.eq('g');
    adapterMass2.transformImperialToMetric();
    expect(adapterMass2.getMass()).to.be.eq(452*0.4536);
    expect(adapterMass2.getType()).to.be.eq('kg');
    adapterMass3.transformImperialToMetric();
    expect(adapterMass3.getMass()).to.be.eq(20*1.016);
    expect(adapterMass3.getType()).to.be.eq('t');
    adapterMass4.transformImperialToMetric();
    expect(adapterMass4.getMass()).to.be.eq(60*6.3503);
    expect(adapterMass4.getType()).to.be.eq('kg');
  });
});
