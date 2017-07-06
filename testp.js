var iterations = 1000000;

var list = [
    {name: 'Item #1', id: 0},
    {name: 'Item #2', id: 1}
  ];

var i;

console.time('F#1');
for(i = 0; i < iterations; i++) {
  test1();
}
console.timeEnd('F#1');

console.time('F#2');
for(i = 0; i < iterations; i++) {
  test2();
}
console.timeEnd('F#2');

console.time('F#3');
for(i = 0; i < iterations; i++) {
  test3();
}
console.timeEnd('F#3');

function test1() {
  var r = list.reduce((acc, item) => {
    acc[item.name] = item;
    return acc;
  }, {});
  var keys = Object.keys(r);
}

function test2() {
  var keys = [];
  var r = list.reduce((acc, item) => {
    acc[item.name] = item;
    keys.push(item.name);
    return acc;
  }, {});
}

function test3() {
  let keys = [];
  let acc = {};
  list.forEach(item => {
    acc[item.name] = item;
    keys.push(item.name);
  }, {});
}