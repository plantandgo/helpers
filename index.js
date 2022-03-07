function isExplorer() {
  return window.navigator.userAgent.indexOf('MSIE ') > -1 || !!window.navigator.userAgent.match(/Trident.*rv\:11\./);
}

function getItemBasedId(arr, id) {
  return arr.filter((item) => item.id === id)[0];
}

function getIndexBasedId(arr, id) {
  // debugger;
  return arr.findIndex(item => item.id === id);
}

function isLocalHost() {
  if (['localhost', '127.0.0.1', ''].includes(window.location.hostname)) {
    return true;
  }
  return false;
}

module.exports = {
    isExplorer,
    getItemBasedId,
    getIndexBasedId,
    isLocalHost
}