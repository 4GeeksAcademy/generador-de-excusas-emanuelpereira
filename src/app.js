import "./style.css";
function generateExcuse() {
  let who = ["Mi perro", "Mi mamá", "Un extraterrestre", "Mi vecino", "Un fantasma", "Mi profesor"];
  let action = ["se comió", "destruyó", "robó", "perdió", "quemó"];
  let what = ["mi tarea", "mi proyecto", "mi teléfono", "mis llaves", "mi ordenador"];
  let when = ["ayer", "esta mañana", "hace un rato", "el otro día", "mientras dormía"];
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("excuse").innerHTML = generateExcuse();
});
