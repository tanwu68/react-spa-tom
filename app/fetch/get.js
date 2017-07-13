import 'whatwg-fetch';
import 'es6-promise';

function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}

export function get(url, paramsObj) {
  var result = fetch(url+'?'+obj2params(paramsObj), {
      method: 'GET',
      credentials: 'include',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
      }
  }).then(resp => {
      return resp.json();
  });

  return result;
}
