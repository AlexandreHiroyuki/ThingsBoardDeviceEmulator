import axios from 'axios'

function postDeviceData(data): void {
  axios
    .post(
      `http://192.168.0.192:8080/api/v1/${process.env.ACCESS_TOKEN_FIRST_DEVICE}/telemetry`,
      data
    )
    .then((res) => {
      console.log(`status-code: ${res.status}`)
    })
  // .catch((error) => {
  //   console.error(error)
  // })
  //   axios
  //     .get(
  //       `http://192.168.0.192:8080/api/v1/${process.env.ACCESS_TOKEN_FIRST_DEVICE}/attributes`
  //     )
  //     .then((res) => {
  //       console.log(`status-code: ${res.status}`, res)
  //     })
}

export default postDeviceData
