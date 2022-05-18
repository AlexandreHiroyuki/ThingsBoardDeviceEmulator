// const max = 1000
// const min = 100

export default function randomGenerator(min: number, max: number): number {
  return Math.random() * (max - min) + min
}
