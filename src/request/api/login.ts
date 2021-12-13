import request from '@/request/request'

// 注册接口
export function userToSignUp(data: { username: string; password: string }): Promise<any> {
  return request({
    url: '/login/signup',
    method: 'post',
    data
  })
}

// 注册接口
export function userToSignIn(data: { username: string; password: string }): Promise<any> {
  return request({
    url: '/login/signin',
    method: 'post',
    data
  })
}
