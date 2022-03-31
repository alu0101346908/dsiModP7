
export class ImperialMass {
  constructor(private mass:number, private type:string) {
  }

  getMass() {
    return this.mass;
  }
  getType() {
    return this.type;
  }
}
