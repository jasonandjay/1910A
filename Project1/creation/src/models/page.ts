import { Effect, Reducer } from 'umi';
import { getArticleCommentList, getPageViews } from '@/services';
import { ICommentItem, IPageItem } from '@/types';

export interface PageModelState {
  // 用Partial把类型转成可选
  // pageItem: Partial<IPageItem>;
  pageItem: IPageItem;
  pageCommentList: ICommentItem[];
  pageCommentLength: number;
}

export interface PageModelStateType {
  namespace: 'page';
  state: PageModelState;
  effects: {
    getPageViews: Effect;
    getPageComment: Effect;
  };
  reducers: {
    save: Reducer<PageModelState>;
  };
}

const PageModel: PageModelStateType = {
  // 等价于vuex的namespace，相当于redux的子reduce
  namespace: 'page',

  // 定义的状态
  state: {
    pageItem: {} as IPageItem,
    pageCommentList: [],
    pageCommentLength: 0
  },

  // 副作用，对应的异步操作，常指网络请求
  effects: {
    *getPageViews({ payload }, {call, put}){
      const result = yield call(getPageViews, payload);
      if (result.data){
        yield put({
          type: 'save',
          payload: {
            pageItem: result.data
          }
        })
      }
    },
    *getPageComment({ payload }, {call, put}){
      const result = yield call(getArticleCommentList, payload);
      if (result.data){
        yield put({
          type: 'save',
          payload: {
            pageCommentList: result.data[0],
            pageCommentLength: result.data[1]
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

export default PageModel;
