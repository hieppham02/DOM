// // // query HTML selector
// // // Lay theo id
// // console.log(document.getElementById("h3")); 
// // // Lay theo class
// // console.log(document.getElementsByClassName("span")); 
// // const span = document.getElementsByClassName("span");
// // for (let i=0; i<span.length; i++){
// //     console.log(span[i]);
// // }
// // // Lay theo tag name
// // const tagName = document.getElementsByTagName("p");
// // for (let i=0; i<tagName.length; i++){
// //     console.log(tagName[i]);
// // }

// // // Lay theo Query selector va all

// // const title = document.querySelector(".span")
// // console.log(title);
// // const all = document.querySelectorAll(".span")
// // console.log(all);

// // Property and Methods

// const app = document.getElementById("app");
// console.dir(app);

// // Text Content     
// // app.innerHTML = "<b>Good Morning </b>"
// // console.log(app.innerHTML);
// // console.log(app.innerText);
// // console.log(app.textContent);


// // Style
// const variable = document.getElementById("app");
// variable.style.color = "red";
// variable.style.fontSize = "200px";
// variable.style.backgroundColor = "#ccc"
// variable.style.margin = "auto"
// variable.innerHTML = "<i><b>Rose is red"
// console.log(variable);

// Children and Parent
// const ol = document.getElementById("list");
// console.log(ol.children);
// console.log(ol.children[1]);
// console.log(ol.children[1].parentElement);
// console.log(ol.children[1].parentElement.parentElement);

// Methods add, remove
// Class, id
    // console.log(ol.classList);
    // ol.classList.remove("ds");
    // ol.classList.add("ds4")
    // console.log(ol);
//// Methods remove(), create element, appendChild
// console.log(ol.children[1].remove());
// const li = document.createElement("li");
// console.log(ol.appendChild(li));
// li.innerHTML = "Good Night"

// Bai tap: them viec lam vao danh sach
// Cho nguoi dung nhap vao, nhap xong add vao danh sach, tao nut de xoa thong tin cuoi
// Click event
let addBtn = document.getElementById("btn");
addBtn.onclick = function(){
    let newLi = document.createElement("li");
    newLi.innerHTML = prompt("Nhap vao day");
    console.log(ol.appendChild(newLi));
}

let dltBtn = document.getElementById("dlt");
dltBtn.onclick = function(){
    let myLi = document.getElementsByTagName("li");
    console.log(myLi);
    myLi[myLi.length-1].remove();
}
