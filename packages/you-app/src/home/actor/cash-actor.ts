import { Action, Actor, IMap } from 'plume2';
import { Command } from '../command';

export default class CashActor extends Actor {
  defaultState() {
    return {};
  }

  @Action(Command.CHOOSE_CASHIER)
  chooseCashier(state: IMap, params: any) {
    return state;
  }
}
