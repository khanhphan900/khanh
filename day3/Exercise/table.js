const contentThead = ["#", "Image", "Name", "Quantity", "Price", "Btn"];

const foods = [
  {
    stt: "1",
    img: "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_640.jpg",
    name: "Cam",
    quantity: "2",
    price: "50",
  },
  {
    stt: "2",
    img: "https://cdn.pixabay.com/photo/2022/08/17/07/10/strawberries-7391738_640.jpg",
    name: "Dâu",
    quantity: "2",
    price: "150",
  },
  {
    stt: "3",
    img: "https://cdn.pixabay.com/photo/2017/02/02/14/04/grapes-2032838_640.jpg",
    name: "Nho den",
    quantity: "2",
    price: "180",
  },
  {
    stt: "4",
    img: "https://cdn.pixabay.com/photo/2018/08/22/13/58/grapes-3623694_640.jpg",
    name: "Mang cut",
    quantity: "2",
    price: "220",
  },
  {
    stt: "5",
    img: "https://cdn.pixabay.com/photo/2017/07/20/18/40/apricots-2523272_640.jpg",
    name: "Dao TQ",
    quantity: "2",
    price: "100",
  },
];

const h1 = document.getElementsByTagName("h1")[0];

h1.innerHTML = "List Foods";

// create thead
const table = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr");

contentThead.forEach((e) => {
  const th = document.createElement("th");
  th.textContent = e;
  tr.appendChild(th);
});

thead.appendChild(tr);
table.appendChild(thead);

// create tbody
const tbody = document.createElement("tbody");

foods.forEach((e) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
     <th>${e.stt}</th>
     <td><img src="${e.img}" alt=""></td>
     <td>${e.name}</td>
     <td>${e.quantity}</td>
     <td class="i-price">${e.price}</td>
     <td><button id="${e.stt}" onclick="deleteItem(this)">Delete</button></td>
     `;
  tr.id = `item${e.stt}`;
  tbody.appendChild(tr);
});

table.appendChild(tbody);

// create footer
const tfoot = document.createElement("tfoot");

function getTotalPrice() {
  let total = 0;
  const fourColTds = tbody.querySelectorAll("tr > td:nth-child(5)");
  fourColTds.forEach((e) => {
    total += parseInt(e.textContent);
  });
  tfoot.innerHTML = `<tr><th colspan=4>Total</th><th>${total}</th><th><button onclick="addItem()">Add</button></th></tr>`;
}
getTotalPrice();

table.appendChild(tfoot);

// create table
const myTable = document.getElementById("myTable");
myTable.appendChild(table);

// create deleteItem()
function deleteItem(btn) {
  const id = btn.getAttribute("id");
  const tr = document.getElementById(`item${id}`);
  tr.remove();
  getTotalPrice();
}

function addItem() {
  const myForm = document.getElementById("myForm");
  myForm.style = "display: block";
}

// Cancel
function cancel() {
  const myForm = document.getElementById("myForm");
  myForm.style = "display: none";
}
document.getElementById("bg").addEventListener("click", function (event) {
  if (event.target === this) {
    const myForm = document.getElementById("myForm");
    myForm.style = "display: none";
  }
});

// get data form
const addForm = document.getElementById("addForm");
addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const linkImg = document.getElementById("img").value;
  const foodName = document.getElementById("foodName").value;
  const foodQuantity = document.getElementById("foodQuantity").value;
  const foodPrice = document.getElementById("foodPrice").value;
  const lastTd = tbody.querySelector("tr:last-child > th:first-child");
  let lastSTT = 0;
  if (lastTd) {
    lastSTT += parseInt(lastTd.textContent);
  }
  const food = {
    stt: lastSTT + 1,
    img: linkImg,
    name: foodName,
    quantity: foodQuantity,
    price: foodPrice,
  };

  console.log(food.stt);
  addItem2(food);
  getTotalPrice();
  addForm.reset();
});

function addItem2(food) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
     <th>${food.stt}</th>
     <td><img src="${food.img}" alt=""></td>
     <td>${food.name}</td>
     <td>${food.quantity}</td>
     <td class="i-price">${food.price}</td>
     <td><button id="${food.stt}" onclick="deleteItem(this)">Delete</button></td>
     `;
  tr.id = `item${food.stt}`;
  tbody.appendChild(tr);
}
