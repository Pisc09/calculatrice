// const btns = document.querySelectorAll(".calc-btn");
// console.log(btns.length);

// console.log(btns);

// typeBtn = btns;
const ecran = document.getElementById("ecrand");
console.log(ecran);

let valeurNbrs;

const btns = document.querySelectorAll(".calc-btn").forEach((e) => {
  console.log(e.textContent);
  e.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    valeurNbrs = e.target.textContent; // ici j'essaie de récupérer les valeurs, mais apparemment ce n'est pas ça, donc je continue de chercher
    console.log(valeurNbrs);
    const result = eval(valeurNbrs); // quand je saisie le + = cela m'envoi une erreur
    ecran.append(result);
  });
});

// let calcul = "2+3+7";
// ecran.append(eval(calcul));
