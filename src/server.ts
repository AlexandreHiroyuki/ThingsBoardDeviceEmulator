import postDeviceData from './app'
import dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod'
})

// console.log(dotenv)
// console.log(process.env.NODE_ENV)
// console.log(process.env.ACCESS_TOKEN_FIRST_DEVICE)

postDeviceData(() => {
  return {}
})
