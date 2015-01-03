var seed = require('seed-random')
var strftime = require('strftime')
var tree = require('./tree.json')

module.exports.getMeal = getMeal
module.exports.next7 = next7

function getMeal(type, nativeDate) {
  var date = strftime('%F', nativeDate)
  var rng = seed(date)
  var meal = {date: date}
  Object.keys(tree[type]).forEach(function (entry) {
    var choices = tree[type][entry]
    var picked = Math.floor(rng() * (choices.length))
    meal[entry] = choices[picked]
  })
  return meal
}

function next7() {
  var week = []
  for (var i = 0; i < 7; i++) {
    var date = new Date()
    date.setDate(date.getDate() + i)
    week.push(getMeal('Dinner', date))
  }
  return week
}

