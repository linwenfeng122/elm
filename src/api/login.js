import request from '@/utils/request'
export function fetchPost(username,password) {
      return new Promise((resolve, reject) => {
        const params = {
          username,
          password
        }
        request.post('/login/login',params)
              .then(response => {
                  resolve(response);
              })
              .catch((error) => {
                 reject(error)
              })
      })
 
}
export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

