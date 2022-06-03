import axios from 'axios'

function postDeviceData(data): void {
  axios
    .post(
      `http://${process.env.TB_HOST_ADDRESS}/api/v1/${process.env.ACCESS_TOKEN_FIRST_DEVICE}/telemetry`,
      data
    )
    .then((res) => {
      console.log(`status-code: ${res.status}`)
      console.log(data)
    })
    .catch((error) => {
      console.error(error)
    })
}

export default postDeviceData
