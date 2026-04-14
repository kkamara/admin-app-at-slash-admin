import HttpService from './HttpService'

export const LoginUserService = (credentials) => {
  const http = new HttpService()
  const tokenID = "admin-token"
  
  return new Promise((resolve, reject) => {
    http.postData('/user', credentials)
      .then(response => {
        localStorage.setItem(
          tokenID,
          JSON.stringify({ data: response.data.data, }),
        )
        return resolve(response.data)
      })
      .catch(err => reject(err))
  })
}

export const AuthorizeUserService = () => {
  const http = new HttpService()
  const tokenID = "admin-token"
  
  return new Promise((resolve, reject) => {
    http.getData(
      '/user/authorise',
      tokenID,
    )
      .then(response => {
        return resolve(response.data)
      })
      .catch(err => reject(err))
  })
}

export const LogoutUserService = () => {
  const http = new HttpService()
  const tokenID = "admin-token"
  return http.deleteData(
    '/user',
    tokenID,
  )
    .then((response) => {
      let storage = localStorage.getItem(tokenID)
      storage = JSON.parse(storage)
      if (null !== localStorage.getItem(tokenID)) {
        localStorage.removeItem(tokenID)
      }
      return response.data
    })
    .catch(err => err)
}