

export class MetricMass {
  constructor(private mass:number = 0, private type:string = '') {

  }
  getMass() {
    return this.mass;
  }
  setMass(mass:number) {
    this.mass = mass;
  }
  getType() {
    return this.type;
  }
  setType(type:string) {
    this.type = type;
  }
}
