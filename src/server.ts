import dotenv from 'dotenv'

import postDeviceData from './app'
import randomActivationGenerator from './generators/randomActivation'
import randomSummatoryGenerator from './generators/randomSummatory'

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod'
})

const temperatureGenerator = new randomSummatoryGenerator(50, 0, 100)
const flowGenerator = new randomSummatoryGenerator(0.25, 0, 1)
const flowActivationGenerator = new randomActivationGenerator(5, 20)

setInterval(
  () =>
    postDeviceData({
      ts: Date.now(),
      values: {
        temperature: temperatureGenerator.generate(10),
        flow: flowActivationGenerator.generate()
          ? flowGenerator.generate(0.1)
          : undefined
      }
    }),
  500
)
