import { ViewAction } from 'plume2';
import Store from '../store';

export class OrderAction extends ViewAction {
  store: Store;

  setItem = (key, value) => {
    this.store.dispatch('actor: setItem', { key, value });
  };
}
