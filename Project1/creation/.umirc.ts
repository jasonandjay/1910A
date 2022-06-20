import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  // 开启dva，基于redux+redux-saga的状态管理
  dva: {
    immer: true,
    hmr: false,
  },
  // 开启antd
  antd: {},
});
