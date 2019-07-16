

//用户
export interface IUserInfo{
}

export function login():Promise<IUserInfo>{
  return new Promise<IUserInfo>((resolve:any)=>{
    resolve({
    });
  })
}


export function logout():Promise<IUserInfo>{
  return new Promise<IUserInfo>((resolve:any)=>{
    resolve({
    });
  })
}
