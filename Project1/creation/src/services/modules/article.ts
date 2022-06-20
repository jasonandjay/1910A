import { request } from 'umi';
// 获取文章列表
export function getArticleList(page: number = 1){
  return request('/api/article', {
    // params是url的一部分，拼接在path后面
    params: {
      page,
      pageSize: 12,
      status: 'publish'
    },
  })
}
