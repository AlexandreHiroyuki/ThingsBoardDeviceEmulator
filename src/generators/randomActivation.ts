import randomGenerator from './random'

export default class randomActivationGenerator {
  next_activation: number
  cycle_counter: number
  min: number
  max: number

  constructor(min: number = 0, max: number = 3) {
    this.next_activation = Math.floor(randomGenerator(min, max))
    this.cycle_counter = 0
    this.min = min
    this.max = max
  }

  generate(): boolean {
    if (this.cycle_counter >= this.next_activation) {
      this.cycle_counter = 0
      this.next_activation = Math.floor(randomGenerator(this.min, this.max))

      return true
    }

    this.cycle_counter++

    return false
  }
}
