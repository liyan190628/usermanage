const protocol = location.protocol
let url = location.host
let apiBaseUrl = `${protocol}//`

switch (url) {
  default:
    apiBaseUrl = `http://192.168.43.174:8080/`
}
export { apiBaseUrl }
