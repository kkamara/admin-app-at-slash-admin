import axios from "axios"

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = false

export default class HttpService
{
  _domain = null
  _url = null

  constructor() {
    this.domain = process.env.REACT_APP_WEB_API_ROOT_URL
    this.url = this.domain
  }

  set domain(newDomain) {
    return this._domain = newDomain
  }

  get domain() {
    return this._domain
  }

  set url(newDomain) {
    return this._url = newDomain+"/api/v1"
  }

  get url() {
    return this._url
  }

  postData = (path, item, tokenID="") => {
    let requestOptions = this.postRequestOptions({ item, })
    if (tokenID.length) {
      let storage = localStorage.getItem(tokenID)
      try {
        storage = JSON.parse(storage)
        requestOptions = this.postRequestOptions({
          item,
          token: storage.data.authToken,
        })
      } catch (err) {}
    }
    let url = this.url+path
    if (null !== path.match(/http/g)) {
      url = path
    }
    return axios.post(
      url, 
      requestOptions.data, 
      { headers: requestOptions.headers },
    )
  }

  getData = (path, tokenID="") => {
    let requestOptions = this.getRequestOptions()
    if (tokenID.length) {
      let storage = localStorage.getItem(tokenID)
      try {
        storage = JSON.parse(storage)
        requestOptions = this.getRequestOptions(
          storage.data.authToken,
        )
      } catch (err) {}
    }
    let url = this.url+path
    if (null !== path.match(/http/g)) {
      url = path
    }
    return axios.get(
      url, 
      { headers: requestOptions.headers },
    )
  }

  patchData = (path, item, tokenID="") => {
    let requestOptions = this.patchRequestOptions({ item, })
    if (tokenID.length) {
      let storage = localStorage.getItem(tokenID)
      try {
        storage = JSON.parse(storage)
        requestOptions = this.patchRequestOptions({
          item,
          token: storage.data.authToken,
        })
      } catch (err) {}
    }
    let url = this.url+path
    if (null !== path.match(/http/g)) {
      url = path
    }
    return axios.patch(
      url, 
      requestOptions.data, 
      { headers: requestOptions.headers },
    )
  }

  deleteData = (path, tokenID="") => {
    let requestOptions = this.delRequestOptions()
    if (tokenID.length) {
      let storage = localStorage.getItem(tokenID)
      try {
        storage = JSON.parse(storage)
        requestOptions = this.delRequestOptions(
          storage.data.authToken,
        )
      } catch (err) {}
    }
    let url = this.url+path
    if (null !== path.match(/http/g)) {
      url = path
    }
    return axios.delete(
      url, 
      { headers: requestOptions.headers },
    )
  }

  putFormData = (path, item, tokenID="") => {
    let requestOptions = this.putRequestOptions({ item, })
    if (tokenID.length) {
      let storage = localStorage.getItem(tokenID)
      try {
        storage = JSON.parse(storage)
        requestOptions = this.putRequestOptions({
          item,
          token: storage.data.authToken,
        })
      } catch (err) {}
    }
    let url = this.url+path
    if (null !== path.match(/http/g)) {
      url = path
    }
    return axios.putForm(
      url, 
      requestOptions.data, 
      { headers: requestOptions.headers, timeout: this.timeout, },
    )
  }

  getRequestOptions = (token) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-type" : "application/json",
        "Time-Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
      }
    }
    if (token) {
      requestOptions.headers.Authorization = "Bearer " +token
    }
    return requestOptions
  }

  postRequestOptions = ({ token, item, }) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
        "Time-Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      data : item || undefined,
    }
    if (token) {
      requestOptions.headers.Authorization = "Bearer " +token
    }
    return requestOptions
  }

  putRequestOptions = ({ token, item, }) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
        "Time-Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      data : item || undefined,
    }
    if (token) {
      requestOptions.headers.Authorization = "Bearer " +token
    }
    return requestOptions
  }

  patchRequestOptions = ({ token, item, }) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
        "Time-Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      data : item || undefined,
    }
    if (token) {
      requestOptions.headers.Authorization = "Bearer " +token
    }
    return requestOptions
  }

  delRequestOptions = (token) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-type" : "application/json",
        "Time-Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
      }
    }
    if (token) {
      requestOptions.headers.Authorization = "Bearer " +token
    }
    return requestOptions
  }
}
