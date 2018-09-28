const protocol = location.protocol
let url = location.host
let apiBaseUrl = `${protocol}//`

switch (url) {
  default:
    apiBaseUrl = ``
}
export { apiBaseUrl }
