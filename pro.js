var inp = document.getElementById("input");
const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  var v = inp.value;
  var fib = (n, mamo = {}) => {
    if (n in mamo) return mamo[n];
    if (n <= 2) return 1;
    mamo[n] = fib(n - 1, mamo) + fib(n - 2, mamo);
    return mamo[n];
  };
  var add = document.getElementById("addp");
  add.innerHTML = `
            <p class="p">fibonacci number is</p><br>
            ${fib(v)}
    `;
});
// it gonn work intli  n 1476
// more than that n =  infinity
/* more then 7400 n = Error cose 
that result number it more then js top number*/
