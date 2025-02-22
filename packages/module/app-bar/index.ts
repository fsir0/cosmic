import type { Module } from '@cosmic/core/parts';
import root from './src/app-bar.vue';
import MenuService from './src/menu.service';
export default {
  root,
  providers: [ MenuService ],
} as Module;

export { MenuService };
