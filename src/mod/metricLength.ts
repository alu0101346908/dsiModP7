

export class MetricLength {
  constructor(private length: number = 0, private type:string = '') {

  }
  getLength() {
    return this.length;
  }
  setLength(length: number) {
    this.length = length;
  }
  getType() {
    return this.type;
  }
  setType(type:string) {
    this.type = type;
  }
}
