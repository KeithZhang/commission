export interface IAsyncResult<T = any> {
  err: Error;
  res: T;
}

export interface ISetting {
  isUpload?: boolean;
}

declare global {
  interface Window {
    token: string;
  }
}
