import 'regenerator-runtime/runtime'; // allow use async/await without 'runtime' error
import { loadMenuComponent, loadCardComponent } from './utils/component-loader';

(() => {
  loadMenuComponent();
  loadCardComponent();
})();
