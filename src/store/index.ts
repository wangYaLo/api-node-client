import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const modulesVoid = require.context('./modules', true, /\.ts$/);
const modulesFiles: string[] = require.context('./modules', true, /\.ts$/).keys();
const modulesobj = modulesFiles.reduce((modules, modulePath) => {
  const moduleName: string = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesVoid(modulePath);
  modules = { ...modules, [moduleName]: value.default };
  return modules;
}, {});

export default new Vuex.Store({
  modules: { ...modulesobj }
});
