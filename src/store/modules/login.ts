import { ActionEnum, ActionType } from '../storeTypes/loginType/actionsType'

const state = {}

const mutations = {}

const actions: ActionType = {
  [ActionEnum.SUBMIT_LOGIN]({ commit }, data) {
    return new Promise((reslove, reject) => {
      reslove(1)
    })
  }
}

const user = {
  state,
  mutations,
  actions
};

export default user;

