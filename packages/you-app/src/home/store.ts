import { Store } from 'plume2';
import CashActor from './actor/cash-actor';
import * as viewAction from './view-action';

export default class AppStore extends Store {
  bindViewAction() {
    return viewAction;
  }

  bindActor() {
    return [CashActor];
  }
}
