// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
}

function appendDriver(name) {
  let ray = drivers.slice()
  ray.push(name)
  return ray
}

function prependDriver(name) {
  let ray = drivers.slice()
  ray.unshift(name)
  return ray
}

function removeLastDriver() {
  let ray = drivers.slice()
  ray.pop(name)
  return ray
}

function removeFirstDriver() {
  let ray = drivers.slice()
  ray.shift(name)
  return ray
}
