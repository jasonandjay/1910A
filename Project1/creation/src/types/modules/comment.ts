export interface ICommentItem {
  id: string;
  name: string;
  email: string;
  content: string;
  html: string;
  pass: boolean;
  userAgent: string;
  hostId: string;
  url: string;
  parentCommentId?: any;
  replyUserName?: any;
  replyUserEmail?: any;
  createAt: string;
  updateAt: string;
  children: ICommentItem[];
}
