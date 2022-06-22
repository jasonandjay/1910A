import {useDispatch, useSelector, ArticleModelState} from 'umi';
import {useEffect} from 'react';
// css module的使用方式
import styles from './index.less';
// 可以在css module的基础上使用多个样式
import classNames from 'classnames';
// 禁止使用普通引入
// import './index.less';

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
      <h1 className={classNames(styles.title, styles.title2)}>Page index</h1>
      {/* <h1 className="title">Page index</h1> */}

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
