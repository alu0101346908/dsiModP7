import 'mocha';
import {expect} from 'chai';
import {ImperialMass} from '../src/mod/imperialMass';
import {MetricMass} from '../src/mod/metricMass';
//import {ImperialLength} from '../src/mod/imperialLength';
//import {MetricLength} from '../src/mod/metricLength';
//import {AdapterLength} from '../src/mod/adapterLength';
import {AdapterMass} from '../src/mod/adapterMass';

describe('AdapterLength tests', () => {



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
