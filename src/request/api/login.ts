import request from '@/request/request'

// 注册接口
export function userToSignUp(data: { username: string; password: string }): Promise<any> {
  return request({
    url: '/login/signup',
    method: 'post',
    data
  })
}
