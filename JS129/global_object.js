//global object

function updateGlobal(argStr) {
  appState = argStr;
}

updateGlobal('running');
console.log(global.appState); //-> 'running'