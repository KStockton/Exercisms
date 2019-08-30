//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.sideA = a
    this.sideB = b
    this.sideC = c
  }

  kind() {
    if(this.sideA === this.sideB && this.sideA === this.sideC){
      return 'equilateral';
    } else if(this.sideA !== this.sideB && this.sideC === this.sideA || this.sideA === this.sideB && this.sideA !== this.sideC){
      return 'isosceles';
    }
  }
}
