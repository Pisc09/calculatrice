// const btns = document.querySelectorAll(".calc-btn");
// console.log(btns.length);

// console.log(btns);

// typeBtn = btns;
const ecran = document.getElementById("ecrand");
console.log(ecran);

const btns = document.querySelectorAll(".calc-btn").forEach((e) => {
  console.log(e.textContent);
  e.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    ecran.append(e.target.textContent);
    let valeurNbrs = e.textContent;
    console.log(valeurNbrs);
  });
});
