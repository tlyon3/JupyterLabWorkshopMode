import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab_workshop_mode extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_workshop_mode',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab_workshop_mode is activated!');
  }
};

export default extension;
