import dotenv from 'dotenv'

import postDeviceData from './app'
import randomGenerator from './generators/random'
import randomSummatoryGenerator from './generators/randomSummatory'

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod'
})

const temperatureGenerator = new randomSummatoryGenerator(50, 0, 100)
const flowGenerator = new randomSummatoryGenerator(0, 0, 1)

setInterval(
  () =>
    postDeviceData({
      ts: Date.now(),
      values: {
        temperature: temperatureGenerator.generate(20),
        flow: flowGenerator.generate(0.1)
      }
    }),
  1000
)
