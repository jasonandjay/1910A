import styles from './index.less';
import {useDispatch, useSelector, ArticleModelState} from 'umi';
import {useEffect} from 'react';

export default function IndexPage() {
  const dispatch = useDispatch();
  const  {articleList} = useSelector((state: {article: ArticleModelState}) =>state.article);

  useEffect(()=>{
    dispatch({
      type: 'article/getArticleList'
    })
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {articleList.map(item=>{
        return <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.cover} alt="" />
          <p>{item.summary}</p>
        </div>
      })}
    </div>
  );
}
