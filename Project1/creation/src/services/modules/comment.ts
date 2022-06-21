import { request } from 'umi';

// 获取文章评论列表
export function getArticleCommentList(id: string, page: number = 1){
  return request(`/api/comment/host/${id}`, {
    params: {
      page,
      pageSize: 6
    },
  })
}
