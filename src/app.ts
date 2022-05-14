import axios from 'axios'

function postDeviceData(data: Object): void {
  axios
    .post(
      `http://192.168.0.192:8080/api/v1/${process.env.ACCESS_TOKEN_FIRST_DEVICE}/telemetry`,
      data
    )
    .then()
}

export default postDeviceData
