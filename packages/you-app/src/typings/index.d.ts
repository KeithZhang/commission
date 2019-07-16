export interface IResult<T> {
  code: string; //状态编码;
  data: T;
  message: string;
}

export interface IPageRequest<T> {
  pageNum: number; //当前页码
  pageSize: number; //每页显示
}

export interface IPageResponse<T> {
  total: number; //总数量
  pageNum: number; //当前页码
  pageSize: number; //每页显示
  dataList: T[];
}
