import { Effect, Reducer } from 'umi';
import { getArticleDetail, getArticleList, getArticleRecommend } from '@/services';
import { IArticleDetail, IArticleItem } from '@/types';

export interface ArticleModelState {
  articleList: IArticleItem [];
  recommedArticleList: IArticleItem [];
  articleLength: number;
  articleDetail: IArticleDetail
}

export interface ArticleModelType {
  namespace: 'article';
  state: ArticleModelState;
  effects: {
    getArticleList: Effect;
    getArticleRecommend: Effect;
    getArticleDetail: Effect;
  };
  reducers: {
    save: Reducer<ArticleModelState>;
  };
}

const ArticleModel: ArticleModelType = {
  // 等价于vuex的namespace，相当于redux的子reduce
  namespace: 'article',

  // 定义的状态
  state: {
    articleList: [],
    recommedArticleList: [],
    articleLength: 0,
    articleDetail: {} as IArticleDetail
  },

  // 副作用，对应的异步操作，常指网络请求
  effects: {
    *getArticleList({ payload }, { call, put}) {
      const result = yield call(getArticleList);
      if (result.data){
        yield put({
          type: 'save',
          payload: {
            articleList: result.data[0],
            articleLength: result.data[1]
          }
        })
      }
    },
    *getArticleDetail({ payload }, { call, put}) {
      const result = yield call(getArticleDetail, payload);
      if (result.data){
        yield put({
          type: 'save',
          payload: {
            articleDetail: result.data
          }
        })
      }
    },
    *getArticleRecommend({ payload }, {call, put}){
      const result = yield call(getArticleRecommend);
      if (result.data){
        yield put({
          type: 'save',
          payload: {
            recommedArticleList: result.data
          }
        })
      }
    }
  },

  // 同步修改state的操作
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  }
};

export default ArticleModel;
