// 工具方法
import { utils } from 'utils'

import { Result } from 'api/result'

/**
 * API 案例
 */
export async function example0Api (options = {}) {
  let {
    data0,
  } = options

  let ret = await utils.network.ajax.get({
    url: 'example/0',
    data: {
      data0,
    }
  })

  return new Result(ret)
}
