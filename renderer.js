
let ipc = require('electron').ipcRenderer;

document.getElementById('close').addEventListener('click', () => {
  ipc.send('window-close');
})
