import dotenv from 'dotenv'

import postDeviceData from './app'
import randomGenerator from './generators/random'

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod'
})

// console.log(dotenv)
// console.log(process.env.NODE_ENV)
// console.log(process.env.ACCESS_TOKEN_FIRST_DEVICE)

setInterval(
  () =>
    postDeviceData({
      ts: Date.now(),
      values: {
        temperature: randomGenerator()
      }
    }),
  1000
)
