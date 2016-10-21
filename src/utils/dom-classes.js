/**
 * Whitespace regexp.
 */

var whitespaceRe = /\s+/

/**
 * toString reference.
 */

var toString = Object.prototype.toString

module.exports = classes
module.exports.add = add
module.exports.contains = has
module.exports.has = has
module.exports.toggle = toggle
module.exports.remove = remove
module.exports.removeMatching = removeMatching

function classes (el) {
  if (el.classList) {
    return el.classList
  }

  var str = el.className.replace(/^\s+|\s+$/g, '')
  var arr = str.split(whitespaceRe)
  if (arr[0] === '') arr.shift()
  return arr
}

function add (el, name) {
  // classList
  if (el.classList) {
    el.classList.add(name)
    return
  }

  // fallback
  var arr = classes(el)
  var i = arr.indexOf(name)
  if (!~i) arr.push(name)
  el.className = arr.join(' ')
}

function has (el, name) {
  return el.classList
    ? el.classList.contains(name)
    : !!~classes(el).indexOf(name)
}

function remove (el, name) {
  if (toString.call(name) === '[object RegExp]') {
    return removeMatching(el, name)
  }

  // classList
  if (el.classList) {
    el.classList.remove(name)
    return
  }

  // fallback
  var arr = classes(el)
  var i = arr.indexOf(name)
  if (~i) arr.splice(i, 1)
  el.className = arr.join(' ')
}

function removeMatching (el, re, ref) {
  var arr = Array.prototype.slice.call(classes(el))
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      remove(el, arr[i])
    }
  }
}

function toggle (el, name) {
  // classList
  if (el.classList) {
    return el.classList.toggle(name)
  }

  // fallback
  if (has(el, name)) {
    remove(el, name)
  } else {
    add(el, name)
  }
}
