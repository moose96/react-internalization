function matchParams(uri) {
  return uri.match(/[a-z]+/gi);
}

function _findEntry(object, matches) {
  if (matches.length > 0) {
    return _findEntry(object[matches.shift()], matches);
  } else {
    return object;
  }
}

export default function findEntry(object, uri) {
  let matches = matchParams(uri);

  return _findEntry(object, matches);
}