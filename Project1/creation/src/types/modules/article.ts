export interface IArticleItem {
  id: string;
  title: string;
  cover: string;
  summary?: string;
  content: string;
  html: string;
  toc: string;
  status: string;
  views: number;
  likes: number;
  isRecommended: boolean;
  needPassword: boolean;
  totalAmount?: any;
  isPay: boolean;
  isCommentable: boolean;
  publishAt: string;
  createAt: string;
  updateAt: string;
  tags: IarticleTag[];
  category?: IarticleTag;
}

interface IarticleTag {
  id: string;
  label: string;
  value: string;
  createAt: string;
  updateAt: string;
}

export interface IArticleDetail {
  id: string;
  title: string;
  cover: string;
  summary: string;
  content: string;
  html: string;
  toc: string;
  status: string;
  views: number;
  likes: number;
  isRecommended: boolean;
  needPassword: boolean;
  totalAmount?: any;
  isPay: boolean;
  isCommentable: boolean;
  publishAt: string;
  createAt: string;
  updateAt: string;
  password?: any;
}
