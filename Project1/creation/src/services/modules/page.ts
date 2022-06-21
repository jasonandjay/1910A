import { request } from 'umi';

// 获取页面内容
export function getPageViews(id: string){
  return request(`/api/page/${id}/views`, {
    method: 'POST',
  })
}
