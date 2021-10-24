import 'regenerator-runtime/runtime'; // allow use async/await without 'runtime' error
import { loadComponents } from './utils/component-loader';

(() => {
  loadComponents();
})();
