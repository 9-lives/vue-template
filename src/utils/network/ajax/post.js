import qs from 'qs'

import axiosInstance from './axiosInstance'
import { mock } from 'api/mock'

async function post({
  auth,
  data,
  headers,
  url,
  withCredentials,
}) {
  await mock({
    axios: axiosInstance,
    url,
  })

  return await axiosInstance({
    auth,
    data: qs.stringify(data),
    headers,
    method: 'post',
    url,
    withCredentials,
  })
}

/**
 * ajax post 方法
 */
export default post
