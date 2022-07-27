const mainPhoto = document.getElementById("main-photo");

const mobile1 = document.getElementById("mobile0");
const mobile2 = document.getElementById("mobile1");
const mobile3 = document.getElementById("mobile2");
const mobile4 = document.getElementById("mobile3");
const mobile5 = document.getElementById("mobile4");

mobile1.onclick = function() {
  document.body.style.backgroundColor = "black";
  mainPhoto.src = mobile1.src;
};

mobile2.onclick = function() {
  document.body.style.backgroundColor = "rgb(74 110 188)";
  mainPhoto.src = mobile2.src;
};

mobile3.onclick = function() {
  document.body.style.backgroundColor = "#222";
  mainPhoto.src = mobile3.src;
};

mobile4.onclick = function() {
  document.body.style.backgroundColor = "rgb(193 144 49 / 85%)";
  mainPhoto.src = mobile4.src;
};

mobile5.onclick = function() {
  document.body.style.backgroundColor = "rgb(169 19 19 / 93%)";
  mainPhoto.src = mobile5.src;
};
