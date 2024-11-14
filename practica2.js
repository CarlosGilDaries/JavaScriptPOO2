Array.prototype.media = function () {
  const total = this.reduce((acum, acVal) => acum + acVal, 0);

  return total / this.length;
};

$prueba = [5, 5, 5, 5];
$prueba2 = [1, 2, 3, 4];
$prueba3 = [50, 100, 150];

console.log($prueba.media());
console.log($prueba2.media());
console.log($prueba3.media());
