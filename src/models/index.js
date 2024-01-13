import initEventListeners from './core/eventListeners';
import loadModels from './core/gltfLoader';
import tick from './core/tick';

initEventListeners();
loadModels();
tick();