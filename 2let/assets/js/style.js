let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 4];

let diff = a.filter(function(x) {
  return b.indexOf(x) < 0;
});

console.log("ortaq olmayan eded budur"+" "+diff)