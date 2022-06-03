export default class randomActivationGenerator {
  cycle_counter: number
  min: number
  max: number

  constructor(min: number = 0, max: number = 3) {
    this.cycle_counter = 0
    this.min = min
    this.max = max
  }

  generate(): boolean {
    if (this.cycle_counter < this.min) {
      this.cycle_counter++
      return false
    }
    if (this.cycle_counter >= this.max) {
      this.cycle_counter = 0
      return true
    }

    const generated_activation = Math.random() < 0.5

    this.cycle_counter++

    if (generated_activation) {
      this.cycle_counter = 0
      return true
    }
  }
}
