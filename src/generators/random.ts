export default function randomGenerator(min: number, max: number): number {
  return Math.random() * (max - min) + min
}
