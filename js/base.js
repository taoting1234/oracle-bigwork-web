let host = '47.111.25.1:8080';
// let host = '127.0.0.1:8080';
ajax = function (url, method, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'client', // *client, no-referrer
  })
    .then(response => response.json()) // parses response to JSON
};
//获取参数
let $_GET = (function () {
  let url = window.document.location.href.toString();
  let u = url.split("?");
  if (typeof (u[1]) === "string") {
    u = u[1].split("&");
    let get = {};
    for (let i in u) {
      let j = u[i].split("=");
      get[j[0]] = j[1];
    }
    return get;
  } else {
    return {};
  }
})();
let shuffle = function (array) {

  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

};