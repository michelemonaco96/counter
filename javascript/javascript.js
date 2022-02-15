let counterResult = document.querySelector(".counter-result");
let counterMinusOp = document.querySelector(".counter-minus");
let counterPlusOp = document.querySelector(".counter-plus");
let resetResult = document.querySelector(".reset-button");
let count = 0;

showResult();

counterPlusOp.addEventListener("click", () => {
  count++;
  showResult();
});

counterMinusOp.addEventListener("click", () => {
  count--;
  showResult();
});

resetResult.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete the current count?")) {
    count = 0;
    showResult();
  } else {
    return count;
  }
});

function showResult() {
  counterResult.innerHTML = count;
}
