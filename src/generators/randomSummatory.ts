export default class randomSummatoryGenerator {
  summatory: number
  min: number
  max: number

  constructor(initValue: number, min: number = 0, max: number = 100) {
    this.summatory = initValue
    this.min = min
    this.max = max
  }

  generate(variation: number): number {
    this.summatory += Math.random() * (variation - -variation) + -variation
    if (this.summatory > this.max) {
      this.summatory = this.max
    } else if (this.summatory < this.min) {
      this.summatory = this.min
    }

    return this.summatory
  }
}
