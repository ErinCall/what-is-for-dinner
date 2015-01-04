#!/usr/bin/env node
var next7 = require('../index.js').next7;

next7().forEach(function (day) {
  console.log(day.date);
  Object.keys(day).forEach(function (key) {
    if (key === 'date') return;
    console.log('  %s: %s', key, day[key]);
  });
});
