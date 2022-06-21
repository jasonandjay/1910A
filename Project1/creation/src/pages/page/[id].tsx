import { useEffect } from 'react';
import { IRouteComponentProps, useDispatch, useSelector, PageModelState, ArticleModelState } from 'umi';

const map: { [key: string]: string } = {
  'msgboard': '2c1794cc-10d8-4d48-adda-7ff02371aee8',
  'about': '8f3973e9-4ed4-4849-ad85-b7d3b8093623'
};

const Page: React.FC<IRouteComponentProps<{ id: string }>> = ({ match }) => {
  const path = match.params.id;
  const id = map[path];
  const dispatch = useDispatch();
  const { pageItem, pageCommentList, recommedArticleList } = useSelector((state: { article: ArticleModelState, page: PageModelState }) => ({...state.article, ...state.page}))

  useEffect(() => {
    // 获取页面详情
    dispatch({
      type: 'page/getPageViews',
      payload: id
    })
    // 获取评论列表
    dispatch({
      type: 'page/getPageComment',
      payload: id
    })
    // 获取推荐列表
    dispatch({
      type: 'article/getArticleRecommend'
    })
  }, [])

  return <div>
    {/* 文章内容 */}
    <div dangerouslySetInnerHTML={{ __html: pageItem.content }}></div>
    {/* 评论 */}
    <div>
      {pageCommentList.map(item=>{
        return <li key={item.id}>
          <p>{item.content}</p>
        </li>
      })}
    </div>
    {/* 推荐文章 */}
    <div>
      {recommedArticleList.map(item=>{
        return <li key={item.id}>
          <p>{item.title}</p>
          <img src={item.cover} alt=""/>
        </li>
      })}
    </div>
  </div>
};

export default Page;
