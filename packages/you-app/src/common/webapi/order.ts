

//用户
export interface IOrderInfo{

}


/**
 * 查询订单列表 ..
 * @returns {Promise<IUserInfo>}
 */
export function queryOrderList():Promise<IOrderInfo>{
  return new Promise<IOrderInfo>((resolve:any)=>{
    resolve({
    });
  })
}
