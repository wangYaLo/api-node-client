/* eslint-disable no-unused-vars */
import { Commit } from 'vuex'

export enum ActionEnum {
    SUBMIT_LOGIN = 'login'
  }
export interface ActionType<C = Commit> {
  [ActionEnum.SUBMIT_LOGIN]({ commit }: { commit: C }, data: any): Promise<any>;
}
