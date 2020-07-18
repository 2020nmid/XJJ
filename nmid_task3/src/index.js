let $ = function (e) {
  return document.querySelector(e);
};

let show = $(".show");
let pox = $(".pos");
let clickpos = $(".clickpos");
let todo = $(".do");
let hidden = $(".hidden");
let list1 = [];
let list2 = [];
todo.onclick = () => {
  hidden.style.display = "block";
  clear(show);
  list1 = createnode(show);

  console.log(list1);
};
console.dir(show);

show.onmousemove = function (e) {
  pox.innerHTML = `x:${e.screenX - 8}y:${e.screenY - 248}`;
};

// show.onclick = function (e) {
//   console.log(e);
//   let li = document.createElement("li");
//   li.innerHTML = `x:${e.screenX - 8}y:${e.screenY - 248}`;
//   clickpos.appendChild(li);
// };

let createnode = (e) => {
  let node = [];
  for (let i = 0; i < 3; i++) {
    let x = randomNum(0, 200);
    let y = randomNum(0, 200);
    let x_y = { x, y };
    let plate = document.createElement("h3");
    plate.style.top = `${y}px`;
    plate.style.left = `${x}px`;
    plate.innerHTML = i;
    plate.onclick = function () {
      showpox(this);
    };
    e.appendChild(plate);
    node.push(x_y);
  }

  return node;
};

let clear = (e) => {
  while (e.firstChild) {
    e.removeChild(e.firstChild);
  }
};

function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

let showpox = (e) => {
  let x = parseInt(e.style.left);
  let y = parseInt(e.style.top);
  let x_y = { x, y };
  list2.push(x_y);
  console.log(list2);
  if (list2.length == 3) {
    same();
    list2 = [];
  }
};

let same = () => {
  for (let i = 0; i < 3; i++) {
    console.log(list2[i].x, list1[i].x, list2[i].y, list1[i].y);
    if (list2[i].x != list1[i].x && list2[i].y != list1[i].y) {
      alert("验证失败!");
      list2 = [];
      clear(show);
      list1 = createnode(show);
      return;
    }
  }
  alert("验证成功");
  list2 = [];
};
