import initEventListeners from './core/eventListeners';
import tick from './core/tick';
import { loadScene } from './scene';

initEventListeners();
loadScene();
tick();