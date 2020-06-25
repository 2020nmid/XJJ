import "@babel/polyfill";
import "./css/index.css";
import "./css/main.scss";
console.log("hello");

let up = document.querySelectorAll(".toptip li");
let A = up[0].innerHTML.toLocaleUpperCase();
let B = up[1].innerHTML.toLocaleUpperCase();
console.log(A, B);
up[0].innerHTML = A;
up[1].innerHTML = B;

let switchs = document.querySelectorAll(".child:nth-child(3) li");
console.log(switchs);
switchs.forEach((e) => {
  e.innerHTML = e.innerHTML.toLocaleUpperCase();
});

var toA = (e) => {
  e.innerHTML = e.innerHTML.toLocaleUpperCase();
};
function $(e) {
  let a = document.querySelector(e);
  return a;
}

let maina = document.querySelector(".main_show a");
toA(maina);
let banner = $(".last_banner>a");
toA(banner);
let good = document.querySelector(".goods");
let shelves = document.querySelector(".shops");
for (let i = 0; i < 11; i++) {
  let othergood = good.cloneNode(1);
  shelves.appendChild(othergood);
}
