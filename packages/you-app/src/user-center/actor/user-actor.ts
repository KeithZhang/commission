import { Actor, Action, IMap } from 'plume2';
import {fromJS} from 'immutable';
import {IUserInfo} from "../../common/webapi/userinfo";

export default class UserActor extends Actor {
	defaultState() {
		return {
      userInfo:{
        userName:"",
        fansCount:1223,
        inviteCode:"",
      }
		};
	}

	@Action('user:setUserInfo')
	setUserInfo(state: IMap,params:IUserInfo) :IMap{
	  return state.set("userInfo",fromJS(params));
	}
}
